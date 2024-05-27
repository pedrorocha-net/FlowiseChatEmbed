import type { BubbleProps } from './features/bubble';

export const defaultBotProps: BubbleProps = {
  chatflowid: '',
  apiHost: undefined,
  chatflowConfig: undefined,
  theme: {
    button: {
      backgroundColor: "#502379",
      // right: 20,
      // bottom: 20,
      // size: "medium",
      // iconColor: "white",
      // customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
    },
    chatWindow: {
      showTitle: true, // show/hide the title bar
      title: 'Volt Europa Chatbot',
      titleAvatarSrc: 'https://files.oaiusercontent.com/file-DsS29DK6KU68vWamnldBrGoj?se=2123-12-02T12%3A26%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D1209600%2C%20immutable&rscd=attachment%3B%20filename%3Ddownload.png&sig=Yf6G5WBOXECmUsvCjUjXXQNC2AvEel9ERJYfy8VSBUM%3D',
      welcomeMessage: "Welcome to Volt's chatbot! It was created to help citizens discover how Volt and our political solutions can help us build a prosperous Europe for all, by making it easier to find relevant info about our programs and policies. \n\n Please note: Our chatbot aims to provide neutral and non-partisan information about Volt Europa's policies, but we cannot guarantee its accuracy or completeness. The information is not moderated and should be verified by you. Volt Europa is not liable for any inaccuracies. On this page you can find information on how this chatbot works, and which information is used to train it: https://chatbot.volteuropa.org/about.",
      backgroundColor: '#502379',
      // height: 700,
      // width: 400,
      fontSize: 16,
      poweredByTextColor: '#502379',
      botMessage: {
        backgroundColor: '#F7F8FF',
        textColor: '#303235',
        // showAvatar: true,
        // avatarSrc: 'https://files.oaiusercontent.com/file-DsS29DK6KU68vWamnldBrGoj?se=2123-12-02T12%3A26%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D1209600%2C%20immutable&rscd=attachment%3B%20filename%3Ddownload.png&sig=Yf6G5WBOXECmUsvCjUjXXQNC2AvEel9ERJYfy8VSBUM%3D',
      },
      userMessage: {
        backgroundColor: '#D2C0E6',
        textColor: '#303235',
        showAvatar: false,
        avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png',
      },
      textInput: {
        placeholder: 'Type your question',
        backgroundColor: '#ffffff',
        textColor: '#303235',
        sendButtonColor: '#502379',
      },
    },
  },
  observersConfig: undefined,
};
