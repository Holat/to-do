import { PanGestureHandlerProps } from "react-native-gesture-handler";

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
};

type ListProp = {
  create: boolean;
  taskItem: listProp[];
  setTaskItem: React.Dispatch<React.SetStateAction<listProp[]>>;
};

type DataProp = {
  item: listProp;
  // index: number;
};

interface todoCardProp
  extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  item: listProp;
  setTaskItem: React.Dispatch<React.SetStateAction<listProp[]>>;
  DarkMode: boolean;
}

type historyCardProp = {
  DarkMode: boolean;
  item: listProp;
};

export {
  listProp,
  todoCardProp,
  showCreateProp,
  createScreenProp,
  ListProp,
  DataProp,
  historyCardProp,
};
