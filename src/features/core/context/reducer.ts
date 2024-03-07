import type { CoreState } from "./state";

export type CoreAction =
  | {
      content: CoreState["popupOpenId"];
      type: "SET_POPUP_OPEN_ID";
    }
  | {
      content: never;
      type: never;
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

export const reducer = (state: CoreState, action: CoreAction) => {
  switch (action.type) {
    case "SET_POPUP_OPEN_ID":
      return { ...state, popupOpenId: action.content };

    default:
      action satisfies never;

      return state;
  }
};
