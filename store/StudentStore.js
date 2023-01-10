import create from "zustand";

 export const useStudentStore =create((set, get) => ({
  students: [],
  addStudent: (student) => {
    const students = get().students;
    set({
      students: ([student])
    })
  },

}));


// removeStudent: id =>
// set(state => ({
//   students: state.students.filter(student => student.id !== id)
// })),
// updateStudent: student =>
// set(state => ({
//   students: state.students.map(item => {
//     if (item.id === student.id) {
//       return {
//         ...item,
//         name: student.name,
//         section: student.section
//       };
//     } else {
//       return item;
//     }
//   })
// }))

// const removeStudent = useStudentStore(state => state.removeStudent);
// const updateStudent = useStudentStore(state => state.updateStudent);

// const handleModalClose = response => {
//   setModalOpen(false);
//   if (response) {
//     console.log(response);
//     if (response.id) {
//       updateStudent({
//         name: response.name,
//         section: response.section,
//         id: response.id
//       });
//     } else {
//       addStudent({ name: response.name, section: response.section });
//     }
//   }
//   modalData && setModalData(null);
// };

// const handleDelete = id => {
//   removeStudent(id);
// };

// const editItem = item => {
//   setModalData(item);
//   setModalOpen(true);
// };

// const { studentId } = useParams();


// const student = useStudentStore(
//   useCallback(state => state.students.find(s => s.id === studentId),
//   [studentId])
// );