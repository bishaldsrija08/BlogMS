

const Form = ({type}) => {
    
  return (
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
  <h2 className="text-2xl font-semibold text-gray-800 mb-6">{type} Blog Post</h2>
  <form>
    {/* <!-- Title --> */}
    <div className="mb-4">
      <label htmlFor="title" className="block text-sm font-medium text-gray-700"></label>
      <input
        type="text"
        id="title"
        name="title"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Enter blog title"
        required
      />
    </div>

    {/* <!-- Subtitle --> */}
    <div className="mb-4">
      <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">Subtitle</label>
      <input
        type="text"
        id="subtitle"
        name="subtitle"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Enter blog subtitle"
        required
      />
    </div>

    {/* <!-- File Upload --> */}
    <div className="mb-4">
      <label htmlFor="file" className="block text-sm font-medium text-gray-700">Upload Image</label>
      <input
        type="file"
        id="file"
        name="file"
        className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        accept="image/*"
        required
      />
    </div>

    {/* <!-- Category --> */}
    <div className="mb-4">
      <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">Category</label>
      <input
        type="text"
        id="category"
        name="category"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Enter blog category"
        required
      />
    </div>

    {/* <!-- Description --> */}
    <div className="mb-4">
      <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
      <textarea
        id="description"
        name="description"
        rows="4"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Write a brief description of your blog post"
        required
      ></textarea>
    </div>

    {/* <!-- Submit Button --> */}
    <div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </div>
  </form>
</div>
  )
}

export default Form