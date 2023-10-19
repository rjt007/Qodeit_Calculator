import { useEffect, useState } from "react";

const Calculator = ()=>{
    const data = [
        {
            title: 'academic writing',
            price:{
                highSchool: 12,
                undergrad: 15,
                bachelor: 21,
                professional: 25
            }
        },
        {
            title: 'editing and proofreading',
            price:{
                highSchool: 3,
                undergrad: 5,
                bachelor: 7,
                professional: 13
            }
        },
        {
            title: 'calculations',
            price:{
                highSchool: 18,
                undergrad: 23,
                bachelor: 32,
                professional: 38
            }
        }
    ];
    const education = ['highSchool','undergrad', 'bachelor', 'professional'];
    const [eduIdx, setEduIdx] = useState(0);
    const [titleIdx, setTitleIdx] = useState(0);

    const onTitleChange = (e)=>{
        const clickedItemId = parseInt(e.target.attributes['data-id'].value);
        const title = document.getElementById('research-title');
        for(let i=0;i<title.childNodes.length;i++){
            if(i===clickedItemId){
                title.childNodes[i].style.color = 'black';
            }else{
                title.childNodes[i].style.color = 'white';
            }
        }
        setTitleIdx(clickedItemId);
    }

    const onEducationChange = (e)=>{
        const clickedItemId = parseInt(e.target.attributes['data-id'].value);
        const edu = document.getElementById('education');
        for(let i=0;i<edu.childNodes.length;i++){
            if(i===clickedItemId){
                edu.childNodes[i].style.color = 'black';
            }else{
                edu.childNodes[i].style.color = 'white';
            }
        }
        setEduIdx(clickedItemId);
    }
    
    const [page, setPage] = useState(1);
    const [showPages, setShowPages] = useState(true);

    const onQuantityChange = (e)=>{
        const clickedItemId = parseInt(e.target.attributes['data-id'].value);
        const qty = document.getElementById('qty-btns');
        for(let i=0;i<qty.childNodes.length;i++){
            if(i===clickedItemId){
                qty.childNodes[i].style.color = 'black';
            }else{
                qty.childNodes[i].style.color = 'white';
            }
        }
        if(clickedItemId===0){
            setShowPages(true);
        }
        else{
            setShowPages(false);
        }
    }

    useEffect(()=>{
        const title = document.getElementById('research-title');
        const edu = document.getElementById('education');
        const qty = document.getElementById('qty-btns');
        title.childNodes[0].click();
        edu.childNodes[0].click();
        qty.childNodes[0].click();
    },[]);

    //Calculate approx price
    const price = page*data[titleIdx].price[education[eduIdx]];

    return (
        <div className="bg-violet-300 w-screen h-screen flex justify-center items-center">

            {/* Calculator Container */}
            <div className="bg-white flex flex-col shadow-2xl rounded-2xl">

                {/* Research Field Container */}
                <div className="flex flex-wrap mt-10 mx-4" id="research-title">
                    <button data-id={0} className="bg-violet-400 py-2 px-3 m-1 rounded-lg text-white" onClick={onTitleChange}>Academic Writing</button>
                    <button data-id={1} className="bg-violet-400 py-2 px-3 m-1 rounded-lg text-white" onClick={onTitleChange}>Editing and proofreading</button>
                    <button data-id={2} className="bg-violet-400 py-2 px-3 m-1 rounded-lg text-white" onClick={onTitleChange}>Calculations</button>
                </div>

                {/* Academic Achievment Container */}
                <div className="flex flex-wrap mt-2 mx-4" id="education">
                    <button data-id={0} className="bg-violet-400 py-2 px-3 m-1 rounded-lg text-white" onClick={onEducationChange}>High school</button>
                    <button data-id={1} className="bg-violet-400 py-2 px-3 m-1 rounded-lg text-white" onClick={onEducationChange}>Undergraduate</button>
                    <button data-id={2} className="bg-violet-400 py-2 px-3 m-1 rounded-lg text-white" onClick={onEducationChange}>Bachelor</button>
                    <button data-id={3} className="bg-violet-400 py-2 px-3 m-1 rounded-lg text-white" onClick={onEducationChange}>Professional</button>
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
                            <input type="number" name="qty" id="qty" value={showPages? page : page*275}
                            onChange={(e)=>{
                                if(e.target.value>0 && e.target.value<=100){
                                    setPage(e.target.value);
                                }
                            }}
                            className=" border border-neutral-300 h-10 rounded-lg p-2 w-full text-center"/>
                        </label>
                        <div className="flex justify-evenly" id="qty-btns">
                            <button data-id={0} className=" bg-violet-400 py-2 px-5 m-2 rounded-lg text-white"
                             onClick={onQuantityChange}>Pages
                            </button>
                            <button data-id={1} className=" bg-violet-400 py-2 px-5 m-2 rounded-lg text-white"
                             onClick={onQuantityChange}>Words
                            </button>
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
                        <p className="text-3xl font-bold">${price}</p>
                    </div>

                    {/* Order Button Container*/}
                    <div>
                        <button className="bg-orange-300 py-3 px-4 m-2 rounded-lg
                         text-black text-md font-bold hover:scale-105 hover:shadow-2xl">PROCEED TO ORDER</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Calculator;