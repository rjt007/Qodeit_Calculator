const Calculator = ()=>{
    return (
        <div className="bg-violet-300 w-screen h-screen flex justify-center items-center">

            {/* Calculator Container */}
            <div className="bg-white flex flex-col shadow-2xl rounded-2xl">

                {/* Research Field Container */}
                <div className="flex flex-wrap mt-10 mx-4">
                    <button className="bg-violet-400 py-2 px-3 m-1 rounded-lg text-white">Academic Writing</button>
                    <button className="bg-violet-400 py-2 px-3 m-1 rounded-lg text-white">Editing and proofreading</button>
                    <button className="bg-violet-400 py-2 px-3 m-1 rounded-lg text-white">Calculations</button>
                </div>

                {/* Academic Achievment Container */}
                <div className="flex flex-wrap mt-2 mx-4">
                    <button className="bg-violet-400 py-2 px-3 m-1 rounded-lg text-white">High school</button>
                    <button className="bg-violet-400 py-2 px-3 m-1 rounded-lg text-white">Undergraduate</button>
                    <button className="bg-violet-400 py-2 px-3 m-1 rounded-lg text-white">Bachelor</button>
                    <button className="bg-violet-400 py-2 px-3 m-1 rounded-lg text-white">Professional</button>
                </div>

                {/* Research Paper Select Container */}
                <div className="mt-4 mx-4">
                    <label htmlFor="paper"><p className="text-lg">Type of paper</p></label>
                    <select name="papers" id="paper" className=" border border-neutral-300 h-10 rounded-lg p-2 w-full text-center">
                        <option value="" disabled selected>Select...</option>
                        <option value="research paper">Research Paper</option>
                        <option value="research proposal">Research Proposal</option>
                        <option value="speech">Speech</option>
                        <option value="thesis">Thesis</option>
                        <option value="thesis proposal">Thesis Proposal</option>
                        <option value="thesis statement">Thesis Statement</option>
                    </select>
                </div>

                {/* Quantity and Deadline Input Field Container*/}
                <div className="flex justify-between mt-4 mx-4">

                    {/* Quantity Input Field Container*/}
                    <div>
                        <label htmlFor="qty">
                            <p className="text-md">Quantity</p>
                            <input type="number" name="qty" id="qty" defaultValue={1} min={1} 
                            className=" border border-neutral-300 h-10 rounded-lg p-2 w-full text-center" />
                        </label>
                        <div className="flex justify-evenly">
                            <button className=" bg-violet-400 py-2 px-5 m-2 rounded-lg text-white">Pages</button>
                            <button className=" bg-violet-400 py-2 px-5 m-2 rounded-lg text-white">Words</button>
                        </div>
                    </div>

                    {/* Deadline Input Field Container*/}
                    <div>
                        <label htmlFor="date">
                            <p className="text-md">Deadline</p>
                            <input type="date" name="date" id="date" className=" border border-neutral-300 h-10 
                            rounded-lg p-2 w-full text-center font-bold" defaultValue={'2023-10-19'}/>
                        </label>
                    </div>
                </div>

                {/* Approx. Price and Order Button Container*/}
                <div className="flex justify-between mt-4 mx-4 mb-8">

                    {/* Approx. Price Container*/}
                    <div>
                        <p className="text-xs text-gray-400">Approx. Price</p>
                        <p className="text-3xl font-bold">$</p>
                    </div>

                    {/* Order Button Container*/}
                    <div>
                        <button className="bg-orange-300 py-3 px-4 m-2 rounded-lg
                         text-black text-md font-bold">PROCEED TO ORDER</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Calculator;