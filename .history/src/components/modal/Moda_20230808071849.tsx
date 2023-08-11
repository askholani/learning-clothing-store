export default function Modal() {
  return (
    <div className='absolute top-0 right-0 bottom-0 left-0 bg-slate-950 z-50 opacity-80 flex items-center justify-center'>
      <form method='dialog' className='modal-box w-11/12 max-w-5xl'>
        <h3 className='font-bold text-lg'>Hello!</h3>
        <p className='py-4'>Click the button below to close</p>
        <div className='modal-action'>
          {/* if there is a button, it will close the modal */}
          <button className='btn'>Close</button>
        </div>
      </form>
    </div>
  )
}
