// import * as z from "zod";
// import Form from "next/form";
// // Define a schema
// const ContactSchema = z.object({
//   naam: z.string().trim().min(1, "Vul je naam in.").max(100),
//   email: z.email(),
//   bericht: z.string().trim().min(1, "Vul je bericht in.").max(5000),
// });

// type ContactFormData = z.infer<typeof ContactSchema>;

// export default function ContactPage() {
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     const validatie = ContactSchema.safeParse({
//       naam: formData.get("naam"),
//       email: formData.get("email"),
//       bericht: formData.get("bericht"),
//     });
//     if (!validatie.success) {
//       console.error(validatie.error);
//       return;
//     }
//     const data: ContactFormData = validatie.data;
//     console.log(data);
//   };
//   const inputClass =
//     "mt-2 block w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50";
//   return (
//     <>
//       <main className="min-h-screen bg-[#03111d] px-5 py-16 text-white">
//         <div className="mx-auto max-w-2xl">
//           <Form action="/VerstuurForm">
//             <div>
//               <label htmlFor="naam" className="font-semibold">
//                 Naam
//               </label>
//               <input
//                 id="naam"
//                 name="naam"
//                 type="text"
//                 autoComplete="name"
//                 maxLength={100}
//                 required
//                 className={inputClass}
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="font-semibold">
//                 E-mailadres
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 maxLength={254}
//                 required
//                 className={inputClass}
//               />
//             </div>

//             <div>
//               <label htmlFor="bericht" className="font-semibold">
//                 Bericht
//               </label>
//               <textarea
//                 id="bericht"
//                 name="bericht"
//                 rows={6}
//                 maxLength={5000}
//                 required
//                 className={inputClass}
//               />
//             </div>

//             <button
//               onClick={(event) => handleSubmit(event)}
//               type="submit"
//               className="rounded-lg bg-blue-600 px-6 py-3 font-bold hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
//             >
//               Verstuur bericht
//             </button>
//           </Form>
//         </div>
//       </main>
//     </>
//   );
// }
