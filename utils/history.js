var train = [
    {
        begin:"佛山",
        end:"茂名"
    },
    {
        begin:"广州",
        end:"茂名"
    },
    {
        begin:"江门",
        end:"广州"
    },
    {
        begin:"珠海",
        end:"小榄"
    },
    {
        begin:"小榄",
        end:"江门"
    }];

var coach = [
    {
        begin:"江门",
        end:"茂名"
    },
    {
        begin:"广州",
        end:"茂名"
    },
    {
        begin:"茂名",
        end:"广州"
    },
    {
        begin:"珠海",
        end:"中山"
    },
    {
        begin:"中山",
        end:"江门"
    }];

var plane = [
    {
        begin:"广州",
        end:"北京"
    }
    ];






module.exports = {
  train: train,
  coach: coach,
  plane: plane
}
