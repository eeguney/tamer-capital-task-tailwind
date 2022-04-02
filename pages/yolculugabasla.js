import Head from "next/head";
import { useState } from "react";
import Finish from "../components/Step/Finish";
import StepOne from "../components/Step/StepOne";
import StepTwo from "../components/Step/StepTwo";

export default function Home() {
  const [step, setstep] = useState({ order: 1, form: {} })
  const nextStep = (form) => {
    setstep({ order: step.order + 1, form: { ...step.form, form } })
  }
  return (
    <>
      <Head>
        <title>Yolculuğa Başla - Ferhan Cihaner</title>
        <meta name="description" content="Yolculuğa Başla - Ferhan Cihaner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-wrapper w-full flex flex-col items-center">
        <h1 className="w-full text-3xl lg:text-5xl font-bold text-white bg-black py-12 text-center mb-6">
          Yolculuğa Başla
        </h1>
        {
          step.order === 1 ? 
          <StepOne nextStep={nextStep} />
          : step.order === 2 ? 
          <StepTwo nextStep={nextStep} />
          : <Finish />
        }
      </div>
    </>
  );
}
