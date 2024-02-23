// Hàm chuy?n s? th?c thành d?ng nh? phân
function realToBinary(num, a) {
    let size = 0;

    // Xác d?nh d?u c?a s?
    if (num < 0) {
        a[size++] = 1;
        num = -num;
    } else {
        a[size++] = 0;
    }

    // Ph?n nguyên c?a s?
    let PN = Math.floor(num);
    // Chuy?n ph?n nguyên sang d?ng nh? phân
    while (PN > 0) {
        a[size++] = integerPart % 2;
        PN = Math.floor(integerPart / 2);
    }

    // Ð?o ngu?c m?ng d? có d?ng dúng
    let temp;
    let dem=0;
    for (let i = 0; i < Math.floor(size / 2); ++i) {
    	dem++;
        temp = a[i];
        a[i] = a[size - i - 1];
        a[size - i - 1] = temp;
    }

    // Thêm d?u ch?m
    a[dem+1] = -1;

    // Ph?n th?p phân c?a s?
    let PTP = num - Math.floor(num);

    // Chuy?n ph?n th?p phân thành d?ng nh? phân b?ng cách nhân 2 liên t?c
    while (PTP > 0 && size < 23) {
        PTP *= 2;
        if (PTP >= 1) {
            a[size++] = 1;
            PTP -= 1;
        } else {
            a[size++] = 0;
        }
    }

    return size;
}

function main() {
    const number = parseFloat(prompt("Nhap so thuc can chuyen sang he nhi phân: "));
    const binary = new Array(32);
    const size = realToBinary(number, binary);

    // In ra d?ng nh? phân
    let binaryRepresentation = "So thuc " + number + "sau khi chuyen than he nhi phan la : ";
    for (let i = 0; i < size; ++i) {
        if (binary[i] === -1) {
            binaryRepresentation += ".";
        } else {
            binaryRepresentation += binary[i];
        }
    }
    console.log(binaryRepresentation);
}

main();
