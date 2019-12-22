import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import RecipeScreen from '../screens/RecipeScreen';
import RecipesListScreen from '../screens/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer';
import IngredientScreen from '../screens/IngredientScreen';
import SearchScreen from '../screens/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetailsScreen';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Categories: CategoriesScreen,
    Recipe: RecipeScreen,
    RecipesList: RecipesListScreen,
    Ingredient: IngredientScreen,
    Search: SearchScreen,
    IngredientsDetails: IngredientsDetailsScreen
  },
  {
        initialRouteName: 'Home',
   }
);

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);

export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;