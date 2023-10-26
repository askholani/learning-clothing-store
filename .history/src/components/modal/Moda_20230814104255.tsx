export default function Modal(props: {
  onShowRemove?: any
  onRemoveItem?: any
  bodyModal?: string
  bodyButton?: string
}) {
  const { onShowRemove, onRemoveItem, bodyModal, bodyButton } = props
  const handleRemoveItem = () => {
    onRemoveItem()
    onShowRemove()
  }
  const handleShowModal = () => {
    onShowRemove()
  }
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center text-primer'>
      <div className='absolute w-full h-full bg-black opacity-90'></div>
      <div className='modal-box rounded-none flex flex-col'>
        <div>
          <h3 className='font-bold text-lg'>Caution</h3>
          <p className='py-4'>
            {bodyModal ? bodyModal : 'do you agree to delete the item?'}
          </p>
        </div>
        <div className='flex gap-x-4 justify-end'>
          <button className='btn btn-sm btn-neutral' onClick={handleRemoveItem}>
            {bodyButton ? bodyButton : 'i agree'}
          </button>
          {bodyButton ? (
            <button
              className='btn btn-sm btn-neutral'
              onClick={handleShowModal}>
              i disagree
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}
