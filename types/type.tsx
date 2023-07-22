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
};

type ListProp = {
  create: boolean;
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
};

type todoCardProp = {
  item: listProp;
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
