import hydrate from '../../services/hydration/hydrate';
import PokemonList from '../../components/views/PokemonList';
import ClickableBox from '../../components/atoms/clickableBox';

hydrate([
    PokemonList,
    ClickableBox,
], document);