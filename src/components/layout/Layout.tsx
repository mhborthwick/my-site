type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const tempStyles = {
    border: "2px solid red",
  };
  return <div style={tempStyles}>{children}</div>;
}

export default Layout;
