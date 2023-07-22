import { GestureResponderEvent } from "react-native";

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

// type DataItems = {
//   key: string;
//   data: {
//     name: string;
//     subject: string;
//     date: string;
//     time: string;
//   };
// };

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
export {
  listProp,
  todoCardProp,
  showCreateProp,
  createScreenProp,
  ListProp,
  // DataItems,
  DataProp,
};
