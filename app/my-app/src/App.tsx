import React, { ChangeEvent, useCallback, useState } from "react";
import "./App.css";
import {
  ChakraProvider,
  Center,
  Heading,
  Stack,
  Flex,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { PrimaryButton } from "./components/atoms/PrimaryButton";
import { Record } from "./types/record";
import { StudyRecord } from "./components/organisms/StudyRecord";

function App() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");
  const [records, setRecords] = useState<Array<Record>>([]);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) =>
    setDate(e.target.value);
  const onChangeDetail = (e: ChangeEvent<HTMLInputElement>) =>
    setDetail(e.target.value);
  const onClickAdd = useCallback(() => {
    const record: Record = {
      title: title,
      detail: detail,
      date: date,
    };
    setRecords([...records, record]);
  }, [date, detail, records, title]);

  return (
    <ChakraProvider>
      <Center>
        <Heading as="h1" fontSize="42px" mt="20px" mb="40px">
          勉強記録
        </Heading>
      </Center>
      <Stack spacing="30px">
        <Heading as="h2" mx="auto">
          勉強したことを追加
        </Heading>
        <Flex mx="auto" align="center">
          <FormControl>
            <Input
              value={title}
              placeholder="タイトル"
              onChange={onChangeTitle}
            ></Input>
          </FormControl>
          <FormControl>
            <Input
              value={detail}
              placeholder="詳細"
              onChange={onChangeDetail}
            ></Input>
          </FormControl>
          <FormControl>
            <Input value={date} type="date" onChange={onChangeDate}></Input>
          </FormControl>
          <PrimaryButton onClick={onClickAdd}>追加</PrimaryButton>
        </Flex>
        <Heading as="h2" mx="auto">
          勉強した内容一覧
        </Heading>
        {records &&
          records.map((record) => (
            <StudyRecord
              key={record.title}
              record={record}
              records={records}
              setRecords={setRecords}
            />
          ))}
      </Stack>
    </ChakraProvider>
  );
}

export default App;
