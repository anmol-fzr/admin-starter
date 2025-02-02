const Loading = () => (
  <div className="h-screen w-screen fixed inset-0 overflow-hidden grid place-items-center">
    <div className="flex">
      <div className="relative">
        <div className="w-12 h-12 rounded-full absolute border-2 border-solid border-gray-200"></div>
        <div className="w-12 h-12 rounded-full animate-spin absolute border-2 border-solid border-blue-500 border-t-transparent"></div>
      </div>
    </div>
  </div>
)

export default Loading 
