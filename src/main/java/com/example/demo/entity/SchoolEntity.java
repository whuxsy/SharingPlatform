package com.example.demo.entity;


import javax.persistence.*;

/**
 * @ Author     ：Theory
 * @ Description：学校实体类
 */

@Entity
@Table(name = "school")
public class SchoolEntity {


    @Id
    @GeneratedValue
    private long schoolId;//院校号

    private String schoolName;//院校名

    @Column(length = 1000)
    private String schoolIntro;//院校简介

    private String imgLink;//院校图片链接


    public SchoolEntity() {

    }

    public SchoolEntity(String schoolName) {
        this.schoolName = schoolName;
    }

    public long getSchoolId() {
        return schoolId;
    }

    public void setSchoolId(long schoolId) {
        this.schoolId = schoolId;
    }

    public String getSchoolName() {
        return schoolName;
    }

    public void setSchoolName(String schoolName) {
        this.schoolName = schoolName;
    }

    public String getSchoolIntro() {
        return schoolIntro;
    }

    public void setSchoolIntro(String schoolIntro) {
        this.schoolIntro = schoolIntro;
    }

    public String getImgLink() {
        return imgLink;
    }

    public void setImgLink(String imgLink) {
        this.imgLink = imgLink;
    }
}
