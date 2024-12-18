function NotFound() {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <h1 className='text-3xl font-bold underline'>404</h1>
      <NavLink to='/login' replace className='text-blue-500 hover:text-blue-700'>
        login
      </NavLink>
    </div>
  )
}

export default NotFound
