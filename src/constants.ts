import type { BubbleProps } from './features/bubble';

export const defaultBotProps: BubbleProps = {
  chatflowid: '',
  apiHost: undefined,
  chatflowConfig: undefined,
  theme: {
    button: {
      backgroundColor: '#502379',
    },
    chatWindow: {
      showTitle: true,
      title: 'Volt Europa Chatbot',
      titleAvatarSrc:
        'https://files.oaiusercontent.com/file-DsS29DK6KU68vWamnldBrGoj?se=2123-12-02T12%3A26%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D1209600%2C%20immutable&rscd=attachment%3B%20filename%3Ddownload.png&sig=Yf6G5WBOXECmUsvCjUjXXQNC2AvEel9ERJYfy8VSBUM%3D',
      welcomeMessage:
        'Welcome to Volt\'s chatbot! It was created to help citizens discover how Volt and our political solutions ' +
        'can help us build a prosperous Europe for all, by making it easier to find relevant info about our programs ' +
        'and policies.' +
        '\nIf you’d prefer to speak to a person, please open this page: https://volteuropa.org/chat.' +
        '\n\nPlease note: Our chatbot aims to provide neutral and non-partisan information about Volt Europa\'s ' +
        'policies, but we cannot guarantee its accuracy or completeness. The information is not moderated and should ' +
        'be verified by you. Volt Europa is not liable for any inaccuracies. On this page you can find information on' +
        ' how this chatbot works, and which information is used to train it: https://volteuropa.org/about_chatbot.',
      backgroundColor: '#502379',
      fontSize: 14,
      footer: {
        text: '',
        company: 'See details about Volt Europa chatbot',
        companyLink: 'https://volteuropa.org/about_chatbot',
        textColor: '#fff',
      },
      botMessage: {
        backgroundColor: '#F7F8FF',
        textColor: '#303235',
      },
      userMessage: {
        backgroundColor: '#D2C0E6',
        textColor: '#303235',
        showAvatar: false,
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
