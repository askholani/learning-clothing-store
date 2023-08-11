export default function Modal() {
  return (
    <dialog className='modal'>
      <span className='text-sekunder'>HAIII</span>
      <form method='dialog' className='modal-box  bg-sekunder'>
        <h3 className='font-bold text-lg text-sekunder'>Hello!</h3>
        <p className='py-4'>Press ESC key or click outside to close</p>
      </form>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  )
}
