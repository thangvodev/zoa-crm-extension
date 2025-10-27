import { Divider, FormInstance, Input } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { Form } from "../../../../common/form";
import { SendTestingMessagePopup } from "../send-test-message/send-test-message-popup";
import { Button } from "../../../../common/button";
import TemplateBanner from "../../../../../static/images/template-img.png";
import { ImageUpload, UploadImage } from "../../../../common/image-upload";
import UploadIcon from "../../../../icons/UploadIcon";
import AddCircleIcon from "../../../../icons/AddCircleIcon";
import MinusCircleIcon from "../../../../icons/MinusCircleIcon";
import { Select } from "../../../../common/select";

const UpdateTemplateForm = ({ form }: Props) => {
  const [bannerImages, setBannerImages] = useState<UploadImage[]>([]);
  const [buttonImages, setButtonImages] = useState<{
    [key: number]: { images: UploadImage[] };
  }>({});

  const handleRemoveButton = useCallback(
    (index: number, remove: (index: number) => void) => {
      remove(index);

      setButtonImages((prev) => {
        const newState: { [key: number]: { images: UploadImage[] } } = {};

        Object.entries(prev).forEach(([key, value], newIndex) => {
          const oldKey = parseInt(key);
          if (oldKey < index) {
            newState[oldKey] = value;
          } else if (oldKey > index) {
            newState[oldKey - 1] = value;
          }
        });

        return newState;
      });
    },
    [],
  );

  function handleFinish(values: any) {
    console.log(values);
  }

  return (
    <div className="flex flex-1 gap-[20px]">
      <Form
        form={form}
        name="updateTemplateForm"
        className="flex flex-1 flex-col gap-[20px]"
        onFinish={handleFinish}
      >
        {/* Transaction message */}
        <div className="flex flex-col gap-[12px]">
          <div className="text-lg font-normal">Transaction message</div>
          <Form.Item
            name="name"
            label="Tên template"
            layout="vertical"
            style={{ margin: 0 }}
          >
            <Input
              placeholder="Description"
              showCount
              maxLength={50}
              className="h-[48px]"
            />
          </Form.Item>
          <Form.Item label="Banner" layout="vertical" style={{ margin: 0 }}>
            <ImageUpload
              images={bannerImages}
              setImages={setBannerImages}
              maxCount={1}
              uploadButton={
                <div className="flex h-[80px] w-[138px] flex-col items-center justify-center gap-[8px] rounded-[4px] border border-dashed border-gray3 px-[12px]">
                  <UploadIcon className="size-[16px] text-blueB60" />
                  <div className="text-center text-xs font-normal text-blueB60">
                    Tải ảnh lên
                  </div>
                </div>
              }
              className="h-[80px] w-full"
            />
          </Form.Item>
          <Form.Item
            name="name"
            label="Tiêu đề"
            layout="vertical"
            style={{ margin: 0 }}
          >
            <Input
              placeholder="Description"
              showCount
              maxLength={50}
              className="h-[48px]"
            />
          </Form.Item>
          <Form.Item
            name="description"
            label="Văn bản"
            layout="vertical"
            style={{ margin: 0 }}
          >
            <Input.TextArea
              placeholder="Nhập mô tả"
              showCount
              maxLength={50}
              autoSize={{ minRows: 4, maxRows: 20 }}
            />
          </Form.Item>
        </div>
        <Divider className="m-0" />
        {/* Table  */}
        <div className="flex flex-col gap-[12px]">
          <div className="text-lg font-normal">Bảng</div>
          <div className="text-sm font-normal text-gray6">
            Vui lòng thêm tiêu đề và nội dung từng hàng của bảng, nhấn nút “Thêm
            hàng” để thêm hàng mới.
          </div>
          <Form.List name="table">
            {(fields, { add, remove }) => (
              <div className="flex flex-col gap-[12px]">
                {fields.map((field) => (
                  <div
                    key={field.key}
                    className="flex items-center justify-between gap-[12px]"
                  >
                    <Form.Item
                      label="Tiêu đề"
                      name={[field.name, "title"]}
                      layout="vertical"
                      style={{ margin: 0 }}
                    >
                      <Input placeholder="Nhập title" className="h-[48px]" />
                    </Form.Item>
                    <Form.Item
                      label="Nội dung"
                      name={[field.name, "description"]}
                      layout="vertical"
                      style={{ margin: 0 }}
                    >
                      <Input placeholder="Nhập nội dung" className="h-[48px]" />
                    </Form.Item>
                    <Button.Icon
                      icon={
                        <MinusCircleIcon className="size-[20px] text-red5" />
                      }
                      onClick={() => remove(field.name)}
                    />
                  </div>
                ))}
                <Button
                  text={
                    <div className="flex items-center gap-[6.44px]">
                      <div className="text-xs font-normal text-indigo-600">
                        Thêm hàng
                      </div>
                      <AddCircleIcon className="size-[16.67px] text-blueB60" />
                    </div>
                  }
                  className="h-[32.89px] w-fit flex-none items-center justify-center rounded-[6.44px] bg-violet-50 px-[8px]"
                  onClick={() => add()}
                />
              </div>
            )}
          </Form.List>
        </div>
        <Divider className="m-0" />
        {/* Buttons  */}
        <div className="flex flex-col gap-[12px]">
          <div className="text-lg font-normal">Nút thao tác</div>
          <div className="text-sm font-normal text-gray6">
            Chỉ được thêm tối đa 4 nút.
          </div>
          <Form.List name="buttons">
            {(fields, { add, remove }) => (
              <div className="flex flex-col gap-[12px]">
                {fields.map((field) => (
                  <div
                    key={field.key}
                    className="relative flex flex-col gap-[10.32px] rounded-[8px] border-[0.86px] border-stroke1 p-[10.32px]"
                  >
                    <Form.Item
                      label="Hình icon"
                      layout="vertical"
                      style={{ margin: 0 }}
                    >
                      <ImageUpload
                        images={buttonImages[field.name]?.images}
                        setImages={(images) =>
                          setButtonImages((prev) => ({
                            ...prev,
                            [field.name]: { images },
                          }))
                        }
                        maxCount={1}
                        uploadButton={
                          <div className="flex h-[80px] w-[138px] flex-col items-center justify-center gap-[8px] rounded-[4px] border border-dashed border-gray3 px-[12px]">
                            <UploadIcon className="size-[16px] text-blueB60" />
                            <div className="text-center text-xs font-normal text-blueB60">
                              Tải ảnh lên
                            </div>
                          </div>
                        }
                        className="h-[80px] w-full"
                      />
                    </Form.Item>
                    <Form.Item
                      name={[field.name, "type"]}
                      label="Loại nút"
                      layout="vertical"
                      style={{ margin: 0 }}
                    >
                      <Select
                        options={[
                          {
                            value: 1,
                            label: "1",
                          },
                          {
                            value: 5,
                            label: "5",
                          },
                          {
                            value: 10,
                            label: "10",
                          },
                        ]}
                        placeholder="Chọn thông tin"
                        styles={{
                          root: { height: "48px" },
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Nội dung"
                      name={[field.name, "description"]}
                      layout="vertical"
                      style={{ margin: 0 }}
                    >
                      <Input placeholder="Nhập nội dung" className="h-[48px]" />
                    </Form.Item>
                    <Form.Item
                      label="Đường dẫn liên kết"
                      name={[field.name, "link"]}
                      layout="vertical"
                      style={{ margin: 0 }}
                    >
                      <Input
                        placeholder="Nhập đường dẫn liên kết"
                        className="h-[48px]"
                      />
                    </Form.Item>
                    <Button.Icon
                      icon={
                        <MinusCircleIcon className="absolute right-[10px] top-[10px] size-[20px] text-red5" />
                      }
                      onClick={() => {
                        handleRemoveButton(field.name, remove);
                      }}
                    />
                  </div>
                ))}
                <Form.Item
                  shouldUpdate={(prevValues, curValues) =>
                    prevValues.buttons !== curValues.buttons
                  }
                  noStyle
                >
                  {({ getFieldValue }) => {
                    const buttons = getFieldValue("buttons");
                    if (buttons?.length >= 4) {
                      return null;
                    }

                    return (
                      <Button
                        text={
                          <div className="flex items-center gap-[6.44px]">
                            <div className="text-xs font-normal text-indigo-600">
                              Thêm nút
                            </div>
                            <AddCircleIcon className="size-[16.67px] text-blueB60" />
                          </div>
                        }
                        className="h-[32.89px] w-fit flex-none items-center justify-center rounded-[6.44px] bg-violet-50 px-[8px]"
                        onClick={() => add()}
                      />
                    );
                  }}
                </Form.Item>
              </div>
            )}
          </Form.List>
        </div>
      </Form>
      <PreviewTemplate />
    </div>
  );
};

const PreviewTemplate = () => {
  return (
    <div className="flex max-w-[320px] flex-1 flex-col">
      <div className="flex h-[58px] items-center justify-between border-[0.81px] border-stroke1 px-[16px]">
        <div className="text-sm font-medium text-slate-800">Xem trước mẫu</div>
        <SendTestingMessagePopup>
          {({ open }) => (
            <Button
              text={
                <div className="text-xs font-normal text-indigo-600">
                  Send testing message
                </div>
              }
              className="flex h-[29px] flex-none items-center justify-center rounded-[6.44px] bg-violet-50 px-[8px]"
              onClick={open}
            />
          )}
        </SendTestingMessagePopup>
      </div>
      <div className="flex flex-1 justify-center bg-slate-100 pt-[20px]">
        <div className="flex h-fit w-[257px] flex-col gap-[8.83px] overflow-hidden rounded-[10.59px] bg-white">
          <img src={TemplateBanner} alt="" className="h-[190px] object-cover" />
          <div className="p-[10.59px]">
            <div className="text-xs font-normal">
              Cảm ơn bạn đã đăng ký tham gia minigame SĂN QUÀ TẶNG MÙA HÈ đến từ
              nhãn hàng PangoCDP. Bạn hãy chia sẻ tin nhắn này đến nhiều người
              bạn nhất có thể. Link mời của Bạn: htps:/cjncjdfbv
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { UpdateTemplateForm };

type Props = {
  form: FormInstance;
};
