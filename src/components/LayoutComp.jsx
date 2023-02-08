import Header from "./Header";

export default function LayoutComp({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
