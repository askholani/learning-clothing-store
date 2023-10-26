export default function Modal() {
  return (
    <div className='fixed z-50 flex items-center justify-center text-primer'>
      <form className='modal-box'>
        <h3 className='font-bold text-lg'>Hello!</h3>
        <p className='py-4'>Press ESC key or click outside to close</p>
      </form>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </div>
  )
}
