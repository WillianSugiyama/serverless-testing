resource "aws_security_group" "rds-security-group" {
    name = "testing-rds-sg"
    vpc_id = "${var.vpc_id}"
}

resource "aws_security_group_rule" "mysql_inbound_access" {
    from_port = 3306
    protocol = "tcp"
    security_group_id = "${aws_security_group.rds-security-group.id}"
    to_port = 3306
    type = "ingress"
    cdir_blocks = ["0.0.0.0/0"]
}