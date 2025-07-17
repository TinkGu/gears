import type { FC } from 'react';
import React, { useContext } from 'react';
import type { IThemeContext } from '@umijs/preset-dumi/lib/theme/context';
import { context, NavLink } from 'dumi/theme';
import familyConfig from '../family';
import './side-menu.less';

interface INavbarProps {
  location: any;
  darkPrefix?: React.ReactNode;
}

function sortFamily(sort: string[], input: string[]) {
  let output = [];
  const cached = {};
  sort.forEach((x) => {
    if (input.includes(x)) {
      output.push(x);
      cached[x] = true;
    }
  });
  input.forEach((x) => {
    if (x in cached) return;
    output.push(x);
  });
  return output;
}

const defaultFamilyName = '其它';
function getMenus(theContext: IThemeContext) {
  const { menu: menus, meta, routes } = theContext;
  if (!menus.length) {
    return [];
  }

  const familyKeys = Object.keys(familyConfig);
  const navfamilyName = familyKeys.find((x) => meta.nav?.path === x);
  // 没有分类，直接返回
  if (!navfamilyName) {
    return menus;
  }

  const routeMap = routes.reduce((res, x) => {
    res[x.path] = x;
    return res;
  }, {});

  return menus.map((menu) => {
    if (!menu.children?.length) {
      return menu;
    }

    // 在这里解出 family 集合
    let familyMap = {
      [defaultFamilyName]: [],
    };
    menu.children.forEach((x) => {
      const node = routeMap[x.path];
      const nodeFamily = node?.meta?.family;
      // 未设置 family，则认为是其它
      if (!nodeFamily) {
        familyMap[defaultFamilyName].push(x);
        return;
      } else {
        familyMap[nodeFamily] = familyMap[nodeFamily] || [];
        familyMap[nodeFamily].push(x);
      }
    });
    // 调整 family 顺序
    const finalFamilyNames = sortFamily(
      familyConfig[navfamilyName].map((x) => x.name),
      Object.keys(familyMap).filter((x) => x !== defaultFamilyName),
    ).concat(defaultFamilyName);
    // 只有一种 family，则直接返回
    if (finalFamilyNames.length === 1) {
      return menu;
    }
    let children = [];
    finalFamilyNames.forEach((x) => {
      const nodes = familyMap[x];
      if (!nodes?.length) return;
      children.push({
        name: x,
        isFamily: true,
      });
      children.push(...nodes);
    });
    return { ...menu, children };
  });
}

const SideMenu: FC<INavbarProps> = ({ location }) => {
  const theContext = useContext(context);
  const { config, meta } = theContext;
  const { mode } = config;
  const isHiddenMenus = Boolean((meta.hero || meta.features || meta.gapless) && mode === 'site') || meta.sidemenu === false || undefined;

  if (isHiddenMenus) return null;
  const menu = getMenus(theContext);

  return (
    <div className="__dumi-default-menu">
      <div className="__dumi-default-menu-inner">
        {/* menu list */}
        <ul className="__dumi-default-menu-list">
          {menu.map((item) => {
            // always use meta from routes to reduce menu data size
            const hasChildren = item.children && Boolean(item.children.length);
            const menuPaths = hasChildren
              ? item.children?.map((i) => i.path)
              : [
                  item.path,
                  // handle menu group which has no index route and no valid children
                  location.pathname.startsWith(`${item.path}/`) ? location.pathname : null,
                ];

            if (hasChildren) {
              return (
                <li key={item.path || item.title}>
                  <NavLink to={item.path} isActive={() => menuPaths?.includes(location.pathname) ?? false}>
                    <span className="adm-doc-group-title">{item.title}</span>
                  </NavLink>
                  <ul>
                    {item.children?.map((child) => {
                      if (child.isFamily) {
                        return (
                          <li key={child.name}>
                            <span className="tink-doc-menu-family">{child.name}</span>
                          </li>
                        );
                      }

                      const [enTitle, ...zhTitles] = child.title?.split(' ') || [];
                      const zhTitle = zhTitles.join(' ');
                      return (
                        <li key={child.path}>
                          <NavLink to={child.path} exact>
                            <span className="tink-doc-menu-child">
                              {enTitle}
                              <span className="tink-doc-title-zh">{zhTitle}</span>
                            </span>
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            } else {
              return (
                <li key={item.path}>
                  <NavLink to={item.path} exact>
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
