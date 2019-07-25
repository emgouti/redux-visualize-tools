import { State } from "../../store";
import { hoveredNode } from "./selectors";
import { Dispatch } from "redux";

const state = () => (window as any).store.getState() as State;
const dispatch = () => (window as any).store.dispatch as Dispatch;

export function onClick() {
    const node = hoveredNode(state());
    if (!node) return;
    dispatch()({
        type: 'CLICK_NODE',
        node,
    });
}