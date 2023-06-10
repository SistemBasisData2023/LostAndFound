return (
    <div className="min-h-screen flex items-center justify-center bg-[#444C5C]">
    <div className="container mx-auto py-8">
        <img src="../src/assets/lostitems.png" alt="undraw-Add-user-re-ipe3" className="mx-auto" />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto my-32">
        <div className="mb-4">
          <label htmlFor="item_name" className="block font-semibold mb-1">
            Item Name
          </label>
          <input
            type="text"
            id="item_name"
            value={item_name}
            onChange={handleItemNameChange}
            className="w-full px-4 py-2 rounded border"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-semibold mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            className="w-full px-4 py-2 rounded border"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="locationFound" className="block font-semibold mb-1">
            Location Found
          </label>
          <select
            id="location_found"
            name="location_found"
            onChange={handleLocationFoundChange}
            className="w-full px-4 py-2 rounded border"
          >
            <option value="">Select Location</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="dateFound" className="block font-semibold mb-1">
            Date Found
          </label>
          <input
            type="date"
            id="date_found"
            name="date_found"
            value={date_found}
            onChange={handleDateFoundChange}
            className="w-full px-4 py-2 rounded border"
            max={currentDate}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="locationSubmitted" className="block font-semibold mb-1">
            Location Submitted
          </label>
          <select
            id="locationSubmitted"
            name="locationSubmitted"
            value={location_submitted}
            onChange={handleLocationSubmittedChange}
            className="w-full px-4 py-2 rounded border"
          >
            <option value="">Select Location</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-between">
        <button 
        type="button" 
        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600" onClick={handleBack}>
            Back
          </button>
        <button 
        type="submit" 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Submit
        </button>
        </div>
      </form>
      {isSubmitted && (
        <p className="text-green-500 mt-4">Form submitted successfully!</p>
      )}
    </div>
    </div>
  );
}
