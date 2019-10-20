export default theme => ({
  app: {
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    background: theme.background.primary,
    color: '#333',
  },
  contentWrapper: {
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      marginLeft: 275,
    },
  },
  content: {
    maxWidth: 600,
    minWidth: 300,
  },
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: 2002,
  },
});