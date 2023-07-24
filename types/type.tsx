import { StackNavigationProp } from "@react-navigation/stack";

type listProp = {
  key: string;
  name: string;
  subject: string;
  date: string;
  time: string;
};

type showCreateProp = {
  showCreate: React.Dispatch<React.SetStateAction<boolean>>;
};

type createScreenProp = {
  create: boolean;
  showCreate: React.Dispatch<React.SetStateAction<boolean>>;
  setTaskItem: React.Dispatch<React.SetStateAction<listProp[]>>;
  taskItem: listProp[];
};

type ListProp = {
  create: boolean;
  taskItem: listProp[];
  setTaskItem: React.Dispatch<React.SetStateAction<listProp[]>>;
};

type DataProp = {
  item: listProp;
  index: number;
};

type todoCardProp = {
  item: listProp;
  index: number;
  setTaskItem: React.Dispatch<React.SetStateAction<listProp[]>>;
  taskItem: listProp[];
  DarkMode: boolean;
};

type historyCardProp = {
  DarkMode: boolean;
  item: listProp;
};

type RootStackParamList = {
  loginScreen: undefined;
  index: undefined;
  modal: undefined;
};

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "loginScreen">;
};

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "index">;
};

type ModalScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "modal">;
};

export {
  listProp,
  todoCardProp,
  showCreateProp,
  createScreenProp,
  ListProp,
  DataProp,
  historyCardProp,
  LoginScreenProps,
  HomeScreenProps,
  ModalScreenProps,
};
