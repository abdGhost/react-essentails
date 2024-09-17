export default function Tabs({ children, buttons }) {
  return (
    <>
      <main>{buttons}</main> {children}
    </>
  );
}
