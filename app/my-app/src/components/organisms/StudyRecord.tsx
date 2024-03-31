import { Flex, Text } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, memo } from "react";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { Record } from "../../types/record";

type Props = {
  record: Record;
  records: Array<Record>;
  setRecords: Dispatch<SetStateAction<Array<Record>>>;
};

export const StudyRecord: FC<Props> = memo((props) => {
  const { record, records, setRecords } = props;

  const onClickDelete = () => {
    const newRecords = records.filter(
      (element) => element.title !== record.title
    );
    setRecords(newRecords);
  };

  return (
    <Flex justify="center" alignItems="center">
      <Text fontSize="20px" fontWeight="bold">
        {record?.title},&nbsp;
      </Text>
      <Text fontSize="18px">{record?.detail},&nbsp;</Text>
      <Text fontSize="18px" mr="6px">
        {record?.date}
      </Text>
      <PrimaryButton onClick={onClickDelete}>削除</PrimaryButton>
    </Flex>
  );
});
