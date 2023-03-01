import React from "react";
import { Tooltip, Select } from "@firesoon/antd";
import { BackToPlatformFill, SwitchDistrict } from "@firesoon/icons-react";

const { Option } = Select;

const Index = ({
  isSys,
  isMoreHosptial,
  isMultiAgency,
  hideMultiCampusAll,
  logo,
  backText,
  changeText,
  hosName,
  hospitalInfoVos,
  hospitalId,
  onBackTo,
  onChangeHos,
}: any) => {
  const logoImg = <img src={logo} alt="logo" className="fs-logoIcon" />;

  if (isSys) {
    return logoImg;
  }

  return (
    <>
      <Tooltip placement="left" title={backText}>
        <BackToPlatformFill className="fs-back auto-track" onClick={onBackTo} data-log-value="返回应用平台" />
      </Tooltip>

      {logoImg}

      {isMultiAgency ? (
        hospitalInfoVos.length > 0 ? (
          <Select
            style={{ width: 148, marginLeft: 16 }}
            className="fs-user-roles"
            onChange={onChangeHos}
            value={hospitalId}
            dropdownClassName="fs-user-roles-drop"
            dropdownMatchSelectWidth={false}
          >
            {!hideMultiCampusAll && <Option value={-1}>全部院区</Option>}
            {hospitalInfoVos.map((item: any) => (
              <Option key={item.id} value={item.id} title={item.hospitalName} data-log-value="院区选择">
                {item.hospitalName}
              </Option>
            ))}
          </Select>
        ) : (
          ""
        )
      ) : (
        <>
          <span className="fs-hosName">{hosName}</span>

          {isMoreHosptial && (
            <Tooltip title={changeText}>
              <SwitchDistrict className="fs-icon" onClick={onBackTo} />
            </Tooltip>
          )}
        </>
      )}
    </>
  );
};

export default Index;
