const WrapContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className='max-w-6xl mx-auto flex flex-col'>{children}</div>;
};
export default WrapContainer;
