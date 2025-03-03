-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bancoaviaras
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bancoaviaras
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bancoaviaras` DEFAULT CHARACTER SET utf8 ;
USE `bancoaviaras` ;

-- -----------------------------------------------------
-- Table `bancoaviaras`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancoaviaras`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `foto` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bancoaviaras`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancoaviaras`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bancoaviaras`.`autores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancoaviaras`.`autores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bancoaviaras`.`livros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancoaviaras`.`livros` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `sinopse` TEXT NOT NULL,
  `categorias_id` INT NOT NULL,
  `autores_id` INT NOT NULL,
  `usuarios_id` INT NOT NULL,
  PRIMARY KEY (`id`, `categorias_id`, `autores_id`, `usuarios_id`),
  INDEX `fk_livros_categorias_idx` (`categorias_id` ASC) VISIBLE,
  INDEX `fk_livros_autores1_idx` (`autores_id` ASC) VISIBLE,
  INDEX `fk_livros_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_livros_categorias`
    FOREIGN KEY (`categorias_id`)
    REFERENCES `bancoaviaras`.`categorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_livros_autores1`
    FOREIGN KEY (`autores_id`)
    REFERENCES `bancoaviaras`.`autores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_livros_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `bancoaviaras`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bancoaviaras`.`favoritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancoaviaras`.`favoritos` (
  `id` INT NOT NULL,
  `usuarios_id` INT NOT NULL,
  PRIMARY KEY (`id`, `usuarios_id`),
  INDEX `fk_favoritos_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_favoritos_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `bancoaviaras`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bancoaviaras`.`imagens`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancoaviaras`.`imagens` (
  `id` INT NOT NULL,
  `nome` VARCHAR(100) NOT NULL,
  `livros_id` INT NOT NULL,
  PRIMARY KEY (`id`, `livros_id`),
  INDEX `fk_imagens_livros1_idx` (`livros_id` ASC) VISIBLE,
  CONSTRAINT `fk_imagens_livros1`
    FOREIGN KEY (`livros_id`)
    REFERENCES `bancoaviaras`.`livros` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bancoaviaras`.`favoritos_has_livros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancoaviaras`.`favoritos_has_livros` (
  `favoritos_id` INT NOT NULL,
  `livros_id` INT NOT NULL,
  `livros_categorias_id` INT NOT NULL,
  `livros_autores_id` INT NOT NULL,
  `livros_usuarios_id` INT NOT NULL,
  PRIMARY KEY (`favoritos_id`, `livros_id`, `livros_categorias_id`, `livros_autores_id`, `livros_usuarios_id`),
  INDEX `fk_favoritos_has_livros_livros1_idx` (`livros_id` ASC, `livros_categorias_id` ASC, `livros_autores_id` ASC, `livros_usuarios_id` ASC) VISIBLE,
  INDEX `fk_favoritos_has_livros_favoritos1_idx` (`favoritos_id` ASC) VISIBLE,
  CONSTRAINT `fk_favoritos_has_livros_favoritos1`
    FOREIGN KEY (`favoritos_id`)
    REFERENCES `bancoaviaras`.`favoritos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_favoritos_has_livros_livros1`
    FOREIGN KEY (`livros_id` , `livros_categorias_id` , `livros_autores_id` , `livros_usuarios_id`)
    REFERENCES `bancoaviaras`.`livros` (`id` , `categorias_id` , `autores_id` , `usuarios_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
