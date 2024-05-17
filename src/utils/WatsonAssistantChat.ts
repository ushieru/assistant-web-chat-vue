import { WebChatConfig, WebChatInstance } from '../../@types'
const DEFAULT_BASE_URL = 'https://web-chat.global.assistant.watson.appdomain.cloud'

export const initWatsonAssistantChat = (hostURL: string | undefined, config: WebChatConfig) => new Promise<WebChatInstance>((resolve, reject) => {
    const useURL = hostURL || DEFAULT_BASE_URL
    const scriptURL = `${useURL.replace(/\/$/, '')}/versions/${config.clientVersion || 'latest'}/WatsonAssistantChatEntry.js`
    const scriptElement = document.createElement('script')
    scriptElement.onload = () => (window as any).loadWatsonAssistantChat(config)
        .then(resolve)
    scriptElement.onerror = () => reject()
    scriptElement.src = scriptURL
    document.head.appendChild(scriptElement)
})