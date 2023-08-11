export default function Modal() {
  return (
    <div className='absolute top-0 right-0 bottom-0 left-0 bg-slate-950 z-50 opacity-80 flex items-center justify-center'>
      <form method='dialog' className='modal-box'>
        <h3 className='font-bold text-lg'>Hello!</h3>
        <p className='py-4'>Press ESC key or click outside to close</p>
      </form>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </div>
  )
}
