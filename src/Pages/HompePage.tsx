//components
import SearchForm from "../Components/SearchForm";
import { Characters } from "../Components/Characters";
import Buttons from "../Components/Buttons";

import { useGlobalContext, IContext } from "../context/context";

const HomePage: React.FC = () => {
  const { AllCharacters }: IContext = useGlobalContext();

  return (
    <div>
      <SearchForm />
      <Buttons />
      <Characters characters={AllCharacters} title={"Characters"} />
    </div>
  );
};

export default HomePage;
