import { useTypedSelector } from '../hooks/use-typed-selector';

export const CellList: React.FC = () => {
  useTypedSelector((state) => state);
  return <div>Cell list</div>;
};
