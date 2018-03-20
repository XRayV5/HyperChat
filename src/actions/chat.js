export const handleEnter = text => ({ draft: text });

export const sendMessage = () => (state, actions) => {
  state.socket.emit("new message", state.draft);
};

export const updateMessageLog = newMessageLog => ({
  messageLog: newMessageLog
});

export const pushToMessageLog = newMessage => ({ messageLog }, actions) => ({
  messageLog: [...messageLog, newMessage]
});
