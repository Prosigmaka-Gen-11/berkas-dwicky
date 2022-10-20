import React from "react";
import Button from "./Button";

export default function UbahNama(props) {
  const [greet, setGreet] = React.useState("Hallo");
  const [name, setName] = React.useState("Dwicky Darmawan");
  return (
    <>
      <h1 className="text-3xl text-center pt-10 font-bold">
        {greet}, Selamat Pagi {name} !
      </h1>
      <Button
        buttonName="Ubah Nama"
        handleClick={() => {
          setName("Sobat Mawan");
          setGreet("こんにちは");
        }}
      />
    </>
  );
}
