import { useState } from "react";
import { Formik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
	name: Yup.string().required("Zorunlu alan"),
	phone: Yup.number().required("Zorunlu alan"),
	email: Yup.string().email('Geçersiz e-mail adresi').required('Zorunlu alan'),
	instagram: Yup.string().required("Zorunlu alan"),
  bodySize: Yup.number().required("Zorunlu alan"),
});


const StepOne = ({ nextStep }) => {
  const [question, setQuestion] = useState({
    question1: false,
    question2: false,
  });

  const gonextStep = (form) => {
    nextStep(form);
  };

  const answerHandler = (questionNumber) => {
    questionNumber === 1
      ? setQuestion({ ...question, question1: !question.question1 })
      : setQuestion({ ...question, question2: !question.question2 });
  };

  return (
    <section className="p-8 lg:w-2/4 justify-center flex flex-col">
      <h3 className="text-3xl lg:text-4xl mb-2 lg:mb-6 font-bold">Adım 1</h3>
      <Formik
        initialValues={{ name: "", phone: "", email: "", instagram: "", bodySize: 0 }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          gonextStep({...values, question1: question.question1, question2: question.question2 })
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="form-item flex flex-col">
              <label className="text-xl lg:text-2xl font-bold my-8">
                Kişisel Bilgiler
              </label>
              <div className="flex flex-col gap-4">
                <div className="flex-col md:flex-row flex flex-1 gap-4">
                  <input
                    type="text"
                    placeholder="İsim"
                    name="name"
                    onChange={handleChange}
                    values={values.name}
                    className="flex-1 p-3 border border-black font-bold"
                  />
                  <input
                    type="email"
                    placeholder="E-Posta Adresi"
                    name="email"
                    onChange={handleChange}
                    values={values.email}
                    className="flex-1 p-3 border border-black font-bold"
                  />
                </div>
                <div className="flex-col md:flex-row flex flex-1 gap-4">
                  <input
                    type="phone"
                    placeholder="Telefon"
                    name="phone"
                    onChange={handleChange}
                    values={values.phone}
                    className="flex-1 p-3 border border-black font-bold"
                  />
                  <input
                    type="text"
                    placeholder="Instagram Kullanıcı Adınız"
                    name="instagram"
                    onChange={handleChange}
                    values={values.instagram}
                    className="flex-1 p-3 border border-black font-bold"
                  />
                </div>
              </div>
            </div>
            <div className="form-item flex flex-col">
              <label className="text-2xl font-bold my-8">
                Hangi Ülkede Yaşıyorsun?
              </label>
              <select
                name="country"
                onChange={handleChange}
                values={values.country}
                className="p-3 border border-black bg-white font-bold"
              >
                <option value="Türkiye">Türkiye</option>
                <option value="Türkiye">Almanya</option>
                <option value="Türkiye">Fransa</option>
              </select>
            </div>
            <div className="form-item flex flex-col">
              <label className="text-2xl font-bold my-8">
                Daha önce Herbalife ürünü kulandın mı?
              </label>
              <div className="flex gap-6 font-bold">
                <div className="flex gap-2 items-center">
                  <button
                    type="button"
                    className={`w-11 h-11 border flex items-center justify-center ${
                      question.question1 ? "border-green-400" : "border-black"
                    }`}
                    onClick={() => answerHandler(1)}
                  >
                    {question.question1 ? (
                      <img src="/images/tick.png" alt="tick" />
                    ) : (
                      ""
                    )}
                  </button>
                  Evet
                </div>
                <div className="flex gap-2 items-center">
                  <button
                    type="button"
                    className={`w-11 h-11 border flex items-center justify-center ${
                      !question.question1 ? "border-green-400" : "border-black"
                    }`}
                    onClick={() => answerHandler(1)}
                  >
                    {!question.question1 ? (
                      <img src="/images/tick.png" alt="tick" />
                    ) : (
                      ""
                    )}{" "}
                  </button>
                  Hayır
                </div>
              </div>
            </div>
            <div className="form-item flex flex-col">
              <label className="text-2xl font-bold my-8">
                Daha önce Herbalife üyesi oldun mu?
              </label>
              <div className="flex gap-6 items-center font-bold">
                <div className="flex gap-2 items-center">
                  <button
                    type="button"
                    className={`w-11 h-11 border flex items-center justify-center ${
                      question.question2 ? "border-green-400" : "border-black"
                    }`}
                    onClick={() => answerHandler(2)}
                  >
                    {question.question2 ? (
                      <img src="/images/tick.png" alt="tick" />
                    ) : (
                      ""
                    )}
                  </button>
                  Evet
                </div>
                <div className="flex gap-2 items-center">
                  <button
                    type="button"
                    className={`w-11 h-11 border flex items-center justify-center ${
                      !question.question2 ? "border-green-400" : "border-black"
                    }`}
                    onClick={() => answerHandler(2)}
                  >
                    {!question.question2 ? (
                      <img src="/images/tick.png" alt="tick" />
                    ) : (
                      ""
                    )}{" "}
                  </button>
                  Hayır
                </div>
              </div>
            </div>
            <div className="form-item flex flex-col mb-8">
              <label className="text-2xl font-bold my-8">
                İdeal vücut ölçün nedir?
              </label>
              <input
                type="text"
                placeholder="Ölçünüzü Yazınız"
                name="bodySize"
                onChange={handleChange}
                values={values.bodySize}
                className="p-3 border border-black font-bold"
              />
            </div>
            {errors && <p className="my-6 text-center text-red-600">Formu doldurun...</p>}

            <button
              type="submit"
              className="bg-black w-full py-3 text-white font-bold"
            >
              Gönder
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default StepOne;
