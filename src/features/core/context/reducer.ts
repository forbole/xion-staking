import type { CoreState } from "./state";

export type CoreAction =
  | {
      content: CoreState["isLoadingBlocking"];
      type: "SET_IS_LOADING_BLOCKING";
    }
  | {
      content: CoreState["popupOpenId"];
      type: "SET_POPUP_OPEN_ID";
    };

type Content<T extends CoreAction["type"]> = Extract<
  CoreAction,
  { type: T }
>["content"];

export const setPopupOpenId = (
  content: Content<"SET_POPUP_OPEN_ID">,
): CoreAction => ({
  content,
  type: "SET_POPUP_OPEN_ID",
});

export const setIsLoadingBlocking = (
  content: Content<"SET_IS_LOADING_BLOCKING">,
): CoreAction => ({
  content,
  type: "SET_IS_LOADING_BLOCKING",
});

export const reducer = (state: CoreState, action: CoreAction) => {
  switch (action.type) {
    case "SET_POPUP_OPEN_ID":
      return { ...state, popupOpenId: action.content };

    case "SET_IS_LOADING_BLOCKING":
      return { ...state, isLoadingBlocking: action.content };

    default:
      action satisfies never;

      return state;
  }
};
