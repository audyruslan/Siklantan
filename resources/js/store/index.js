import { atom } from "recoil";

export const showmodal = atom({
    key: "showmodal",
    default: false,
});

// export const useedit = atom({
//     key: "useedit",
//     default: false,
// });

const akunModal = atom({
    key: "akunmodal",
    default: false,
});

const pendModal = atom({
    key: "pendmodal",
    default: false,
});

const editModal = atom({
    key: "editmodal",
    default: [],
});

const editPend = atom({
    key: "editpend",
    default:[],
});

const sidebar = atom({
    key: "sidebar",
    default:true,
});

const KkModal = atom({
    key:"kkmodal",
    default: false,
});

const editKk = atom({
    key: "editkk",
    default:[],
});

const tesModal = atom({
    key :"tesModal",
    default: false,
});

const edittes = atom({
    key : "edittes",
    default:[],
})
export { editModal, pendModal, akunModal, editPend, sidebar, KkModal, editKk, tesModal, edittes};
