const txtStyle = {
  padding: '3px 5px',
  color: '#4569d4',
} as any;

const borderedStyle = {
  ...txtStyle,
  background: 'linear-gradient(to right, #f8faff, rgba(248, 250, 255, 0))',
  borderLeft: 'solid 2px #4569d4',
} as any;

export default function Badge({ name, bordered = true }: { name: string; bordered?: boolean }) {
  const style = bordered ? borderedStyle : txtStyle;
  return <span style={style}>{name}</span>;
}
