const add = document.getElementById("initialadd");

const update_LS_data = ()=>{
    const allnote = document.querySelectorAll('textarea');
    const lis = [];
    allnote.forEach((note)=>{
        return lis.push(note.value);
    })

    localStorage.setItem('notes',JSON.stringify(lis));
}
const newnote = (text="") => {
    const note = document.createElement('div');
    note.classList.add("textbox");
    const Htmlelement = ` <div class="tools">
        <button class="edit_but"><<i class="fa fa-solid fa-pencil fa-2x" ></i></button>
        <button class="del_but"><i class="fa fa-solid fa-trash fa-2x"></i></button>
        </div>
        <div class="main ${text ? "hidden":""}"></div>
        <textarea name="" id="" cols="30" rows="10" class="${text ? "":"hidden"}"></textarea>`;
        note.insertAdjacentHTML('afterbegin',Htmlelement);
        document.body.appendChild(note);
        const edit = note.querySelector(".edit_but");
        const del_b = note.querySelector(".del_but");
        const main = note.querySelector(".main");
        const text_area = note.querySelector("textarea");
        
        main.innerHTML = text;
        text_area.innerHTML = text;
        
        del_b.addEventListener('click',()=>{
            note.remove();
        })
        
        edit.addEventListener('click',()=>{
            main.classList.toggle('hidden');
            text_area.classList.toggle('hidden');
        })

        text_area.addEventListener('change',(event)=>{
            const val  = event.target.value;
            main.innerHTML = val;
            update_LS_data();
        })
}
add.addEventListener('click',newnote);

const get_ls_data = ()=>{
    const notes_ls =JSON.parse(localStorage.getItem('notes'));
    if(notes_ls){
        notes_ls.forEach((notetext) => {
            newnote(notetext);
        });
    }
}
get_ls_data();



