"use strict";

function teapot(num) {

var teapotData = {};

var numDivisions;

if(!num) numDivisions = 3;
else numDivisions = num;

var numTeapotVertices = 306;

var vertices = [

[1.4 , 0.0 , 2.4],
[1.4 , -0.784 , 2.4],
[0.784 , -1.4 , 2.4],
[0.0 , -1.4 , 2.4],
[1.3375 , 0.0 , 2.53125],
[1.3375 , -0.749 , 2.53125],
[0.749 , -1.3375 , 2.53125],
[0.0 , -1.3375 , 2.53125],
[1.4375 , 0.0 , 2.53125],
[1.4375 , -0.805 , 2.53125],
[0.805 , -1.4375 , 2.53125],
[0.0 , -1.4375 , 2.53125],
[1.5 , 0.0 , 2.4],
[1.5 , -0.84 , 2.4],
[0.84 , -1.5 , 2.4],
[0.0 , -1.5 , 2.4],
[-0.784 , -1.4 , 2.4],
[-1.4 , -0.784 , 2.4],
[-1.4 , 0.0 , 2.4],
[-0.749 , -1.3375 , 2.53125],
[-1.3375 , -0.749 , 2.53125],
[-1.3375 , 0.0 , 2.53125],
[-0.805 , -1.4375 , 2.53125],
[-1.4375 , -0.805 , 2.53125],
[-1.4375 , 0.0 , 2.53125],
[-0.84 , -1.5 , 2.4],
[-1.5 , -0.84 , 2.4],
[-1.5 , 0.0 , 2.4],
[-1.4 , 0.784 , 2.4],
[-0.784 , 1.4 , 2.4],
[0.0 , 1.4 , 2.4],
[-1.3375 , 0.749 , 2.53125],
[-0.749 , 1.3375 , 2.53125],
[0.0 , 1.3375 , 2.53125],
[-1.4375 , 0.805 , 2.53125],
[-0.805 , 1.4375 , 2.53125],
[0.0 , 1.4375 , 2.53125],
[-1.5 , 0.84 , 2.4],
[-0.84 , 1.5 , 2.4],
[0.0 , 1.5 , 2.4],
[0.784 , 1.4 , 2.4],
[1.4 , 0.784 , 2.4],
[0.749 , 1.3375 , 2.53125],
[1.3375 , 0.749 , 2.53125],
[0.805 , 1.4375 , 2.53125],
[1.4375 , 0.805 , 2.53125],
[0.84 , 1.5 , 2.4],
[1.5 , 0.84 , 2.4],
[1.75 , 0.0 , 1.875],
[1.75 , -0.98 , 1.875],
[0.98 , -1.75 , 1.875],
[0.0 , -1.75 , 1.875],
[2.0 , 0.0 , 1.35],
[2.0 , -1.12 , 1.35],
[1.12 , -2.0 , 1.35],
[0.0 , -2.0 , 1.35],
[2.0 , 0.0 , 0.9],
[2.0 , -1.12 , 0.9],
[1.12 , -2.0 , 0.9],
[0.0 , -2.0 , 0.9],
[-0.98 , -1.75 , 1.875],
[-1.75 , -0.98 , 1.875],
[-1.75 , 0.0 , 1.875],
[-1.12 , -2.0 , 1.35],
[-2.0 , -1.12 , 1.35],
[-2.0 , 0.0 , 1.35],
[-1.12 , -2.0 , 0.9],
[-2.0 , -1.12 , 0.9],
[-2.0 , 0.0 , 0.9],
[-1.75 , 0.98 , 1.875],
[-0.98 , 1.75 , 1.875],
[0.0 , 1.75 , 1.875],
[-2.0 , 1.12 , 1.35],
[-1.12 , 2.0 , 1.35],
[0.0 , 2.0 , 1.35],
[-2.0 , 1.12 , 0.9],
[-1.12 , 2.0 , 0.9],
[0.0 , 2.0 , 0.9],
[0.98 , 1.75 , 1.875],
[1.75 , 0.98 , 1.875],
[1.12 , 2.0 , 1.35],
[2.0 , 1.12 , 1.35],
[1.12 , 2.0 , 0.9],
[2.0 , 1.12 , 0.9],
[2.0 , 0.0 , 0.45],
[2.0 , -1.12 , 0.45],
[1.12 , -2.0 , 0.45],
[0.0 , -2.0 , 0.45],
[1.5 , 0.0 , 0.225],
[1.5 , -0.84 , 0.225],
[0.84 , -1.5 , 0.225],
[0.0 , -1.5 , 0.225],
[1.5 , 0.0 , 0.15],
[1.5 , -0.84 , 0.15],
[0.84 , -1.5 , 0.15],
[0.0 , -1.5 , 0.15],
[-1.12 , -2.0 , 0.45],
[-2.0 , -1.12 , 0.45],
[-2.0 , 0.0 , 0.45],
[-0.84 , -1.5 , 0.225],
[-1.5 , -0.84 , 0.225],
[-1.5 , 0.0 , 0.225],
[-0.84 , -1.5 , 0.15],
[-1.5 , -0.84 , 0.15],
[-1.5 , 0.0 , 0.15],
[-2.0 , 1.12 , 0.45],
[-1.12 , 2.0 , 0.45],
[0.0 , 2.0 , 0.45],
[-1.5 , 0.84 , 0.225],
[-0.84 , 1.5 , 0.225],
[0.0 , 1.5 , 0.225],
[-1.5 , 0.84 , 0.15],
[-0.84 , 1.5 , 0.15],
[0.0 , 1.5 , 0.15],
[1.12 , 2.0 , 0.45],
[2.0 , 1.12 , 0.45],
[0.84 , 1.5 , 0.225],
[1.5 , 0.84 , 0.225],
[0.84 , 1.5 , 0.15],
[1.5 , 0.84 , 0.15],
[-1.6 , 0.0 , 2.025],
[-1.6 , -0.3 , 2.025],
[-1.5 , -0.3 , 2.25],
[-1.5 , 0.0 , 2.25],
[-2.3 , 0.0 , 2.025],
[-2.3 , -0.3 , 2.025],
[-2.5 , -0.3 , 2.25],
[-2.5 , 0.0 , 2.25],
[-2.7 , 0.0 , 2.025],
[-2.7 , -0.3 , 2.025],
[-3.0 , -0.3 , 2.25],
[-3.0 , 0.0 , 2.25],
[-2.7 , 0.0 , 1.8],
[-2.7 , -0.3 , 1.8],
[-3.0 , -0.3 , 1.8],
[-3.0 , 0.0 , 1.8],
[-1.5 , 0.3 , 2.25],
[-1.6 , 0.3 , 2.025],
[-2.5 , 0.3 , 2.25],
[-2.3 , 0.3 , 2.025],
[-3.0 , 0.3 , 2.25],
[-2.7 , 0.3 , 2.025],
[-3.0 , 0.3 , 1.8],
[-2.7 , 0.3 , 1.8],
[-2.7 , 0.0 , 1.575],
[-2.7 , -0.3 , 1.575],
[-3.0 , -0.3 , 1.35],
[-3.0 , 0.0 , 1.35],
[-2.5 , 0.0 , 1.125],
[-2.5 , -0.3 , 1.125],
[-2.65 , -0.3 , 0.9375],
[-2.65 , 0.0 , 0.9375],
[-2.0 , -0.3 , 0.9],
[-1.9 , -0.3 , 0.6],
[-1.9 , 0.0 , 0.6],
[-3.0 , 0.3 , 1.35],
[-2.7 , 0.3 , 1.575],
[-2.65 , 0.3 , 0.9375],
[-2.5 , 0.3 , 1.125],
[-1.9 , 0.3 , 0.6],
[-2.0 , 0.3 , 0.9],
[1.7 , 0.0 , 1.425],
[1.7 , -0.66 , 1.425],
[1.7 , -0.66 , 0.6],
[1.7 , 0.0 , 0.6],
[2.6 , 0.0 , 1.425],
[2.6 , -0.66 , 1.425],
[3.1 , -0.66 , 0.825],
[3.1 , 0.0 , 0.825],
[2.3 , 0.0 , 2.1],
[2.3 , -0.25 , 2.1],
[2.4 , -0.25 , 2.025],
[2.4 , 0.0 , 2.025],
[2.7 , 0.0 , 2.4],
[2.7 , -0.25 , 2.4],
[3.3 , -0.25 , 2.4],
[3.3 , 0.0 , 2.4],
[1.7 , 0.66 , 0.6],
[1.7 , 0.66 , 1.425],
[3.1 , 0.66 , 0.825],
[2.6 , 0.66 , 1.425],
[2.4 , 0.25 , 2.025],
[2.3 , 0.25 , 2.1],
[3.3 , 0.25 , 2.4],
[2.7 , 0.25 , 2.4],
[2.8 , 0.0 , 2.475],
[2.8 , -0.25 , 2.475],
[3.525 , -0.25 , 2.49375],
[3.525 , 0.0 , 2.49375],
[2.9 , 0.0 , 2.475],
[2.9 , -0.15 , 2.475],
[3.45 , -0.15 , 2.5125],
[3.45 , 0.0 , 2.5125],
[2.8 , 0.0 , 2.4],
[2.8 , -0.15 , 2.4],
[3.2 , -0.15 , 2.4],
[3.2 , 0.0 , 2.4],
[3.525 , 0.25 , 2.49375],
[2.8 , 0.25 , 2.475],
[3.45 , 0.15 , 2.5125],
[2.9 , 0.15 , 2.475],
[3.2 , 0.15 , 2.4],
[2.8 , 0.15 , 2.4],
[0.0 , 0.0 , 3.15],
[0.0 , -0.002 , 3.15],
[0.002 , 0.0 , 3.15],
[0.8 , 0.0 , 3.15],
[0.8 , -0.45 , 3.15],
[0.45 , -0.8 , 3.15],
[0.0 , -0.8 , 3.15],
[0.0 , 0.0 , 2.85],
[0.2 , 0.0 , 2.7],
[0.2 , -0.112 , 2.7],
[0.112 , -0.2 , 2.7],
[0.0 , -0.2 , 2.7],
[-0.002 , 0.0 , 3.15],
[-0.45 , -0.8 , 3.15],
[-0.8 , -0.45 , 3.15],
[-0.8 , 0.0 , 3.15],
[-0.112 , -0.2 , 2.7],
[-0.2 , -0.112 , 2.7],
[-0.2 , 0.0 , 2.7],
[0.0 , 0.002 , 3.15],
[-0.8 , 0.45 , 3.15],
[-0.45 , 0.8 , 3.15],
[0.0 , 0.8 , 3.15],
[-0.2 , 0.112 , 2.7],
[-0.112 , 0.2 , 2.7],
[0.0 , 0.2 , 2.7],
[0.45 , 0.8 , 3.15],
[0.8 , 0.45 , 3.15],
[0.112 , 0.2 , 2.7],
[0.2 , 0.112 , 2.7],
[0.4 , 0.0 , 2.55],
[0.4 , -0.224 , 2.55],
[0.224 , -0.4 , 2.55],
[0.0 , -0.4 , 2.55],
[1.3 , 0.0 , 2.55],
[1.3 , -0.728 , 2.55],
[0.728 , -1.3 , 2.55],
[0.0 , -1.3 , 2.55],
[1.3 , 0.0 , 2.4],
[1.3 , -0.728 , 2.4],
[0.728 , -1.3 , 2.4],
[0.0 , -1.3 , 2.4],
[-0.224 , -0.4 , 2.55],
[-0.4 , -0.224 , 2.55],
[-0.4 , 0.0 , 2.55],
[-0.728 , -1.3 , 2.55],
[-1.3 , -0.728 , 2.55],
[-1.3 , 0.0 , 2.55],
[-0.728 , -1.3 , 2.4],
[-1.3 , -0.728 , 2.4],
[-1.3 , 0.0 , 2.4],
[-0.4 , 0.224 , 2.55],
[-0.224 , 0.4 , 2.55],
[0.0 , 0.4 , 2.55],
[-1.3 , 0.728 , 2.55],
[-0.728 , 1.3 , 2.55],
[0.0 , 1.3 , 2.55],
[-1.3 , 0.728 , 2.4],
[-0.728 , 1.3 , 2.4],
[0.0 , 1.3 , 2.4],
[0.224 , 0.4 , 2.55],
[0.4 , 0.224 , 2.55],
[0.728 , 1.3 , 2.55],
[1.3 , 0.728 , 2.55],
[0.728 , 1.3 , 2.4],
[1.3 , 0.728 , 2.4],
[0.0 , 0.0 , 0.0],
[1.5 , 0.0 , 0.15],
[1.5 , 0.84 , 0.15],
[0.84 , 1.5 , 0.15],
[0.0 , 1.5 , 0.15],
[1.5 , 0.0 , 0.075],
[1.5 , 0.84 , 0.075],
[0.84 , 1.5 , 0.075],
[0.0 , 1.5 , 0.075],
[1.425 , 0.0 , 0.0],
[1.425 , 0.798 , 0.0],
[0.798 , 1.425 , 0.0],
[0.0 , 1.425 , 0.0],
[-0.84 , 1.5 , 0.15],
[-1.5 , 0.84 , 0.15],
[-1.5 , 0.0 , 0.15],
[-0.84 , 1.5 , 0.075],
[-1.5 , 0.84 , 0.075],
[-1.5 , 0.0 , 0.075],
[-0.798 , 1.425 , 0.0],
[-1.425 , 0.798 , 0.0],
[-1.425 , 0.0 , 0.0],
[-1.5 , -0.84 , 0.15],
[-0.84 , -1.5 , 0.15],
[0.0 , -1.5 , 0.15],
[-1.5 , -0.84 , 0.075],
[-0.84 , -1.5 , 0.075],
[0.0 , -1.5 , 0.075],
[-1.425 , -0.798 , 0.0],
[-0.798 , -1.425 , 0.0],
[0.0 , -1.425 , 0.0],
[0.84 , -1.5 , 0.15],
[1.5 , -0.84 , 0.15],
[0.84 , -1.5 , 0.075],
[1.5 , -0.84 , 0.075],
[0.798 , -1.425 , 0.0],
[1.425 , -0.798 , 0.0]
];

//
//  patches.js - Indices into patch control vertices (from vertices.h)
//
//    Each patch is a 4x4 Bezier patch, and there are 32 patches in the
//      Utah teapot.
//

var numTeapotPatches = 32;

var indices = new Array(numTeapotPatches);

indices[0] = [
	0, 1, 2, 3,
	4, 5, 6, 7,
	8, 9, 10, 11,
	12, 13, 14, 15
];
indices[1] = [
	3, 16, 17, 18,
	7, 19, 20, 21,
	11, 22, 23, 24,
	15, 25, 26, 27
];
indices[2] = [
	18, 28, 29, 30,
	21, 31, 32, 33,
	24, 34, 35, 36,
	27, 37, 38, 39
];
indices[3] = [
	30, 40, 41, 0,
	33, 42, 43, 4,
	36, 44, 45, 8,
	39, 46, 47, 12
];
indices[4] = [
	12, 13, 14, 15,
	48, 49, 50, 51,
	52, 53, 54, 55,
	56, 57, 58, 59
];
indices[5] = [
	15, 25, 26, 27,
	51, 60, 61, 62,
	55, 63, 64, 65,
	59, 66, 67, 68
];
indices[6] = [
	27, 37, 38, 39,
	62, 69, 70, 71,
	65, 72, 73, 74,
	68, 75, 76, 77
];
indices[7] = [
	39, 46, 47, 12,
	71, 78, 79, 48,
	74, 80, 81, 52,
	77, 82, 83, 56
];
indices[8] = [
	56, 57, 58, 59,
	84, 85, 86, 87,
	88, 89, 90, 91,
	92, 93, 94, 95
];
indices[9] = [
	59, 66, 67, 68,
	87, 96, 97, 98,
	91, 99, 100, 101,
	95, 102, 103, 104
];
indices[10] = [
	68, 75, 76, 77,
	98, 105, 106, 107,
	101, 108, 109, 110,
	104, 111, 112, 113
];
indices[11] = [
	77, 82, 83, 56,
	107, 114, 115, 84,
	110, 116, 117, 88,
	113, 118, 119, 92
];
indices[12] = [
	120, 121, 122, 123,
	124, 125, 126, 127,
	128, 129, 130, 131,
	132, 133, 134, 135
];
indices[13] = [
	123, 136, 137, 120,
	127, 138, 139, 124,
	131, 140, 141, 128,
	135, 142, 143, 132
];
indices[14] = [
	132, 133, 134, 135,
	144, 145, 146, 147,
	148, 149, 150, 151,
	68, 152, 153, 154
];
indices[15] = [
	135, 142, 143, 132,
	147, 155, 156, 144,
	151, 157, 158, 148,
	154, 159, 160, 68
];
indices[16] = [
	161, 162, 163, 164,
	165, 166, 167, 168,
	169, 170, 171, 172,
	173, 174, 175, 176
];
indices[17] = [
	164, 177, 178, 161,
	168, 179, 180, 165,
	172, 181, 182, 169,
	176, 183, 184, 173
];
indices[18] = [
	173, 174, 175, 176,
	185, 186, 187, 188,
	189, 190, 191, 192,
	193, 194, 195, 196
];
indices[19] = [
	176, 183, 184, 173,
	188, 197, 198, 185,
	192, 199, 200, 189,
	196, 201, 202, 193
];
indices[20] = [
	203, 203, 203, 203,
	206, 207, 208, 209,
	210, 210, 210, 210,
	211, 212, 213, 214
];
indices[21] = [
	203, 203, 203, 203,
	209, 216, 217, 218,
	210, 210, 210, 210,
	214, 219, 220, 221
];
indices[22] = [
	203, 203, 203, 203,
	218, 223, 224, 225,
	210, 210, 210, 210,
	221, 226, 227, 228
];
indices[23] = [
	203, 203, 203, 203,
	225, 229, 230, 206,
	210, 210, 210, 210,
	228, 231, 232, 211
];
indices[24] = [
	211, 212, 213, 214,
	233, 234, 235, 236,
	237, 238, 239, 240,
	241, 242, 243, 244
];
indices[25] = [
	214, 219, 220, 221,
	236, 245, 246, 247,
	240, 248, 249, 250,
	244, 251, 252, 253
];
indices[26] = [
	221, 226, 227, 228,
	247, 254, 255, 256,
	250, 257, 258, 259,
	253, 260, 261, 262
];
indices[27] = [
	228, 231, 232, 211,
	256, 263, 264, 233,
	259, 265, 266, 237,
	262, 267, 268, 241
];
indices[28] = [
	269, 269, 269, 269,
	278, 279, 280, 281,
	274, 275, 276, 277,
	270, 271, 272, 273
];
indices[29] = [
	269, 269, 269, 269,
	281, 288, 289, 290,
	277, 285, 286, 287,
	273, 282, 283, 284
];
indices[30] = [
	269, 269, 269, 269,
	290, 297, 298, 299,
	287, 294, 295, 296,
	284, 291, 292, 293
];
indices[31] = [
	269, 269, 269, 269,
	299, 304, 305, 278,
	296, 302, 303, 274,
	293, 300, 301, 270
];


var points = [];
var normals = [];
var colors = [];
var texCoords = [];

var bezier = function(u) {
    var b =new Array(4);
    var a = 1-u;
    b[3] = a*a*a;
    b[2] = 3*a*a*u;
    b[1] = 3*a*u*u;
    b[0] = u*u*u;
    return b;
}

var nbezier = function(u) {
    var b = [];
    b.push(3*u*u);
    b.push(3*u*(2-3*u));
    b.push(3*(1-4*u+3*u*u));
    b.push(-3*(1-u)*(1-u));
    return b;
}


// center data

var sum = [0, 0, 0];
for(var i = 0; i<306; i++)
for(var j=0; j<3; j++) {
    sum[j] += vertices[i][j];
}
for(var j=0; j<3; j++) {
    sum[j]/=306;
}
for(var i = 0; i<306; i++) {
    for(var j=0; j<3; j++) {
        vertices[i][j] -= sum[j]/2;
    }
}


var h = 1.0/numDivisions;

// patch[numTeapotPatches][16][4] contains 4D data

var patch = new Array(numTeapotPatches);
for(var i=0; i<numTeapotPatches; i++) {
  patch[i] = new Array(16);
}
for(var i=0; i<numTeapotPatches; i++) {
  for(j=0; j<16; j++) {
        patch[i][j] = [vertices[indices[i][j]][0],
            vertices[indices[i][j]][2], vertices[indices[i][j]][1], 1.0];
  }
}


for ( var n = 0; n < numTeapotPatches; n++ ) {


  var data = new Array(numDivisions+1);
  for(var j = 0; j<= numDivisions; j++) {
    data[j] = new Array(numDivisions+1);
  }

  for(var i=0; i<=numDivisions; i++) {
    for(var j=0; j<= numDivisions; j++) {
        data[i][j] = vec4(0,0,0,1);
        var u = i*h;
        var v = j*h;
        var t = new Array(4);
        for(var ii=0; ii<4; ii++) {
          t[ii]=new Array(4);
        }
        for(var ii=0; ii<4; ii++) {
          for(var jj=0; jj<4; jj++) {
                t[ii][jj] = bezier(u)[ii]*bezier(v)[jj];
          }
        }


    for(var ii=0; ii<4; ii++) {
      for(var jj=0; jj<4; jj++) {
        var temp = patch[n][4*ii+jj];
        temp = [t[ii][jj]*temp[0], t[ii][jj]*temp[1],t[ii][jj]*temp[2],0];
        data[i][j] = [data[i][j][0]+temp[0], data[i][j][1]+temp[1],data[i][j][2]+temp[2], 1];
      }
    }
  }
}

var ndata = new Array(numDivisions+1);
for(var j = 0; j<= numDivisions; j++) ndata[j] = new Array(numDivisions+1);
var tdata = new Array(numDivisions+1);
for(var j = 0; j<= numDivisions; j++) tdata[j] = new Array(numDivisions+1);
var sdata = new Array(numDivisions+1);
for(var j = 0; j<= numDivisions; j++) sdata[j] = new Array(numDivisions+1);
for(var i=0; i<=numDivisions; i++)
  for(var j=0; j<= numDivisions; j++) {
      ndata[i][j] = vec4();
      sdata[i][j] = vec4()
      tdata[i][j] = vec4();
      var u = i*h;
      var v = j*h;
      var tt = new Array(4);
      for(var ii=0; ii<4; ii++) tt[ii]=new Array(4);
      var ss = new Array(4);
      for(var ii=0; ii<4; ii++) ss[ii]=new Array(4);

      for(var ii=0; ii<4; ii++) for(var jj=0; jj<4; jj++) {
          tt[ii][jj] = nbezier(u)[ii]*bezier(v)[jj];
          ss[ii][jj] = bezier(u)[ii]*nbezier(v)[jj];
      }

      for(var ii=0; ii<4; ii++) for(var jj=0; jj<4; jj++) {
          var temp = vec4(patch[n][4*ii+jj]); ;
          temp = mult( tt[ii][jj], temp);
          tdata[i][j] = add(tdata[i][j], temp);

          var stemp = vec4(patch[n][4*ii+jj]); ;
          stemp = mult( ss[ii][jj], stemp);
          sdata[i][j] = add(sdata[i][j], stemp);

      }
      temp = cross(tdata[i][j], sdata[i][j])

      ndata[i][j] =  normalize(vec4(temp[0], temp[1], temp[2], 0));
  }

  for(var i=0; i<numDivisions; i++) {
    for(var j =0; j<numDivisions; j++) {
        points.push([data[i][j][0], data[i][j][1], data[i][j][2], 1]);
        normals.push([ndata[i][j][0], ndata[i][j][1], ndata[i][j][2], 0]);
				var s = [data[i][j][0], data[i][j][1], data[i][j][2]];
				var d = Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);
				s = [s[0]/d, s[1]/d, s[2]/d];
				colors.push([0.5*s[0]+0.5, 0.5*s[1]+0.5, 0.5*s[2]+0.5, 1] );
				texCoords.push([0.5*Math.acos(s[0])/Math.PI, 0.5*Math.asin(s[1]/Math.sqrt(1.0-s[0]*s[0]))/Math.PI]);

        points.push([data[i+1][j][0], data[i+1][j][1], data[i+1][j][2], 1]);
        normals.push([ndata[i+1][j][0], ndata[i+1][j][1], ndata[i+1][j][2], 0]);
				s = [data[i+1][j][0], data[i+1][j][1], data[i+1][j][2]];
				var d = Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);
				s = [s[0]/d, s[1]/d, s[2]/d];
				colors.push([0.5*s[0]+0.5, 0.5*s[1]+0.5, 0.5*s[2]+0.5, 1] );
				texCoords.push([0.5*Math.acos(s[0])/Math.PI, 0.5*Math.asin(s[1]/Math.sqrt(1.0-s[0]*s[0]))/Math.PI]);


        points.push([data[i+1][j+1][0], data[i+1][j+1][1], data[i+1][j+1][2], 1]);
        normals.push([ndata[i+1][j+1][0], ndata[i+1][j+1][1], ndata[i+1][j+1][2], 0]);
				s = [data[i+1][j+1][0], data[i+1][j+1][1], data[i+1][j+1][2]];
				var d = Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);
				s = [s[0]/d, s[1]/d, s[2]/d];
				colors.push([0.5*s[0]+0.5, 0.5*s[1]+0.5, 0.5*s[2]+0.5, 1] );
				texCoords.push([0.5*Math.acos(s[0])/Math.PI, 0.5*Math.asin(s[1]/Math.sqrt(1.0-s[0]*s[0]))/Math.PI]);

        points.push([data[i][j][0], data[i][j][1], data[i][j][2], 1]);
        normals.push([ndata[i][j][0], ndata[i][j][1], ndata[i][j][2], 0]);
				s = [data[i][j][0], data[i][j][1], data[i][j][2]];
				var d = Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);
				s = [s[0]/d, s[1]/d, s[2]/d];
				colors.push([0.5*s[0]+0.5, 0.5*s[1]+0.5, 0.5*s[2]+0.5, 1] );
				texCoords.push([0.5*Math.acos(s[0])/Math.PI, 0.5*Math.asin(s[1]/Math.sqrt(1.0-s[0]*s[0]))/Math.PI]);

        points.push([data[i+1][j+1][0], data[i+1][j+1][1], data[i+1][j+1][2], 1]);
        normals.push([ndata[i+1][j+1][0], ndata[i+1][j+1][1], ndata[i+1][j+1][2], 0]);
				s = [data[i+1][j+1][0], data[i+1][j+1][1], data[i+1][j+1][2]];
				var d = Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);
				s = [s[0]/d, s[1]/d, s[2]/d];
				colors.push([0.5*s[0]+0.5, 0.5*s[1]+0.5, 0.5*s[2]+0.5, 1] );
				texCoords.push([0.5*Math.acos(s[0])/Math.PI, 0.5*Math.asin(s[1]/Math.sqrt(1.0-s[0]*s[0]))/Math.PI]);

        points.push([data[i][j+1][0], data[i][j+1][1], data[i][j+1][2], 1]);
        normals.push([ndata[i][j+1][0], ndata[i][j+1][1], ndata[i][j+1][2], 0]);
				s = [data[i][j+1][0], data[i][j+1][1], data[i][j+1][2]];
				var d = Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);
				s = [s[0]/d, s[1]/d, s[2]/d];
				colors.push([0.5*s[0]+0.5, 0.5*s[1]+0.5, 0.5*s[2]+0.5, 1] );
				texCoords.push([0.5*Math.acos(s[0])/Math.PI, 0.5*Math.asin(s[1]/Math.sqrt(1.0-s[0]*s[0]))/Math.PI]);
      }
    }
}

    function translate(x, y, z){
       for(var i=0; i<points.length; i++) {
         points[i][0] += x;
         points[i][1] += y;
         points[i][2] += z;
       };
    }

    function scaled(sx, sy, sz){
        for(var i=0; i<points.length; i++) {
            points[i][0] *= sx;
            points[i][1] *= sy;
            points[i][2] *= sz;
        };
        for(var i=0; i<normals.length; i++) {
            normals[i][0] /= sx;
            normals[i][1] /= sy;
            normals[i][2] /= sz;
        };
    }
    function rotate( angle, axis) {

        var d = Math.sqrt(axis[0]*axis[0] + axis[1]*axis[1] + axis[2]*axis[2]);

        var x = axis[0]/d;
        var y = axis[1]/d;
        var z = axis[2]/d;

        var c = Math.cos( radians(angle) );
        var omc = 1.0 - c;
        var s = Math.sin( radians(angle) );

        var mat = [
            [ x*x*omc + c,   x*y*omc - z*s, x*z*omc + y*s ],
            [ x*y*omc + z*s, y*y*omc + c,   y*z*omc - x*s ],
            [ x*z*omc - y*s, y*z*omc + x*s, z*z*omc + c ]
        ];

        for(var i=0; i<points.length; i++) {
              var u = [0, 0, 0];
              var v = [0, 0, 0];
              for( var j =0; j<3; j++)
               for( var k =0 ; k<3; k++) {
                  u[j] += mat[j][k]*points[i][k];
                  v[j] += mat[j][k]*normals[i][k];
                };
               for( var j =0; j<3; j++) {
                 points[i][j] = u[j];
                 normals[i][j] = v[j];
               };
        };
      }

teapotData.TriangleVertices = points;

teapotData.Normals = normals;
teapotData.translate = translate;
teapotData.scale = scaled;
teapotData.rotate = rotate;
teapotData.VertexColors = colors;
teapotData.TextureCoordinates = texCoords;

return teapotData;

}
