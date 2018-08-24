rinitialState = { dismissOnScroll: true }

// reset cookies on first render
!state.accepted && cookies.get('accepts-cookies') && cookies.remove('accepts-cookies')

const styles = {
  banner: {
    fontFamily: 'Source Sans Pro',
    height: 57,
    background: 'rgba(52, 64, 81, 0.88) url(/cookie.png) 20px 50% no-repeat',
    backgroundSize: '30px 30px',
    backgroundColor: '',
    fontSize: '15px',
    fontWeight: 600
  },
  button: {
    border: '1px solid white',
    borderRadius: 4,
    width: 66,
    height: 32,
    lineHeight: '32px',
    background: 'transparent',
    color: 'white',
    fontSize: '14px',
    fontWeight: 600,
    opacity: 1,
    right: 20,
    marginTop: -18
  },
  message: {
    display: 'block',
    padding: '9px 67px',
    lineHeight: 1.3,
    textAlign: 'left',
    marginRight: 244,
    color: 'white'
  },
  link: {
    textDecoration: 'none',
    fontWeight: 'bold'
  }
}

const message = "Datacup uses cookies to guarantee users the employment of its site features, offering a better purchasing experience. By continuing to browse the site you're agreeing to our use of cookies."

function toggleDismissOnScroll() {
  setState({ dismissOnScroll: !state.dismissOnScroll })
}

function resetCookies() {
  cookies.remove('accepts-cookies')
  setState({ accepted: false })
}

<div>
  <p>
    accepts-cookies: {cookies.get('accepts-cookies') || 'false'}
  </p>

  <button onClick={toggleDismissOnScroll}>
    {`${state.dismissOnScroll ? 'Disable' : 'Activate'} dismissOnScroll`}
  </button>

  <button onClick={resetCookies} style={{ marginLeft: 20 }}>
    Reset Cookies
  </button>

  <CookieBanner
    styles={styles}
    message={message}
    link={{
      msg: 'More information on our use of cookies',
      url: 'http://nocookielaw.com/'
    }}
    buttonMessage='Close'
    dismissOnScroll={state.dismissOnScroll}
    onAccept={() => setState({ accepted: true })}
  />
</div>
