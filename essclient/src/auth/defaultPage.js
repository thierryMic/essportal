import React from 'react'

export default Page => class DefaultPage extends React.Component {
  static getInitialProps (ctx) {
    const loggedUser = localStorage.getItem('loggedUser')
    const pageProps = Page.getInitialProps && Page.getInitialProps(ctx)

    return {
      ...pageProps,
      loggedUser,
      currentUrl: ctx.pathname,
      isAuthenticated: !!loggedUser
    }

  }

  logout = (eve) => {
    // if (eve.key === 'logout') {
    //   Router.push(`/?logout=${eve.newValue}`)
    // }
  }

  componentDidMount () {
    window.addEventListener('storage', this.logout, false)
  }

  componentWillUnmount () {
    window.removeEventListener('storage', this.logout, false)
  }

  render () {
      return (
      <div>
        {/* <Header isAuthenticated={this.props.isAuthenticated} /> */}
        <Page {...this.props} />
      </div>
    )
  }
}
