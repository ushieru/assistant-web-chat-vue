import { VueElement } from "vue";
import { CustomResponseEvent } from "./CustomResponseEvent";
import { WebChatConfig } from "./WebChatConfig";
import { WebChatInstance } from "./WebChatInstance";

export interface WebChatContainerProps {
    config: WebChatConfig
    onBeforeRender?: (instance: WebChatInstance) => Promise<void>
    onAfterRender?: (instance: WebChatInstance) => Promise<void>
    renderCustomResponse?: boolean
    hostURL?: string
}
