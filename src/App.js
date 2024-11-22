import './App.css';

function App() {
  return (
    <div className="w-screen h-full bg-[#dff1e7] flex items-center justify-center">
      <div className="w-full max-w-xs md:max-w-[23.4375rem] lg:max-w-[90rem]">
        <form className="bg-white shadow-md rounded-[20px] px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-bold">
            Contact Us
          </h2>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label>
              First Name *
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"></input>
            </div>
            <div>
              <label>
              Last Name *
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"></input>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label>
              Email Address *
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"></input>
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2">
            <div className="col-span-2">
              <label >
              Query Type *
              </label>
            </div>
            <div className="w-full mr-4">
              <div class="w-full  h-10 inline-flex items-center border rounded px-2 border-slate-300">
                <label class="flex items-center cursor-pointer relative" for="check-2">
                  <input type="checkbox"
                    checked
                    class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                    id="check-2" />
                  <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                      stroke="currentColor" stroke-width="1">
                      <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                    </svg>
                  </span>
                </label>
                <label class="cursor-pointer ml-2 text-slate-600 text-sm" for="check-2">
                  General Enquiry
                </label>
              </div>
            </div>
            <div className="w-full">
              <div class="w-full h-10 inline-flex items-center border rounded px-2 border-slate-300">
                  <label class="flex items-center cursor-pointer relative" for="check-2">
                    <input type="checkbox"
                      checked
                      class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                      id="check-2" />
                    <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label class="cursor-pointer ml-2 text-slate-600 text-sm" for="check-2">
                    Support Request
                  </label>
                </div>
            </div>
          </div>
          <div className="w-full">
            <label>
              Message *
            </label>
            <textarea className="shadow appearance-none h-[10rem] w-full resize-none border rounded leading-tight focus:outline-none focus:shadow-outline">
            </textarea>
          </div>
          <div class="inline-flex items-center">
            <label
              class="relative flex cursor-pointer items-center rounded-full p-3"
              for="ripple-on"
              data-ripple-dark="true"
            >
              <input
                id="ripple-on"
                type="checkbox"
                class="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-slate-800 checked:bg-slate-800 checked:before:bg-slate-400 hover:before:opacity-10"
              />
              <span class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label class="cursor-pointer text-slate-600 text-sm"
              for="ripple-on"
            >
              I consent to be contacted by the team
            </label>
          </div>
          <button class="w-full bg-[#0c7d69] hover:bg-[#16dab6]  text-white font-bold py-2 px-4 rounded">
            Button
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
